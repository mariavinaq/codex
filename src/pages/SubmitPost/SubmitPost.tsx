import { useEffect, useState } from 'react';
import './SubmitPost.scss';
import { useNavigate } from 'react-router-dom';
import { postPost, postPrompt } from '../../services/codex-api';

const SubmitPost = () => {
    const navigate = useNavigate();
    const [htmlCode, setHtmlCode] = useState('');
    const [cssCode, setCssCode] = useState('');
    const [jsCode, setJsCode] = useState('');
    const [preview, setPreview] = useState('');
    const [prompt, setPrompt] = useState('');
    const [posting, setPosting] = useState(false);
    const [fetchingAi, setFetchingAi] = useState(false);

    useEffect(() => {
        const previewSetup = `
            <html>
                <body>${htmlCode}</body>
                <style>${cssCode}</style>
                <script>${jsCode}</script>
            </html>
        `;
        setPreview(previewSetup)
    }, [htmlCode, cssCode, jsCode])

    const submitPost = async (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.target as HTMLFormElement;
        const formData = new FormData();
        formData.append('thumbnail', (form.elements.namedItem('file') as HTMLInputElement).files?.[0] || '');
        formData.append('title', (form.elements.namedItem('title') as HTMLInputElement).value);
        formData.append('description', (form.elements.namedItem('description') as HTMLTextAreaElement).value);
        formData.append('html', htmlCode);
        formData.append('css', cssCode);
        formData.append('js', jsCode);

        const post = await postPost(formData);
        if (post) {
            setPosting(false);
            navigate('/');
        } else {
            setPosting(false);
            alert('Code unsuccessfully published. Click OK to try again.');
        };
    };

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setPosting(true);
        submitPost(event);
    };

    const handleReset = () => {
        setPreview('');
    };

    const handleOnSubmitPrompt = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFetchingAi(true);
        const generated = await postPrompt({ prompt: prompt })
        if (generated) {
            setHtmlCode(generated['htmlCode']);
            setCssCode(generated['cssCode']);
            setJsCode(generated['jsCode']);
            setFetchingAi(false);
            window.scrollTo({ top: 0 });
        } else {
            alert("Try a new prompt");
            setFetchingAi(false);
        }
    };

    return (
        <div className='submit-post'>
            <h2 className='submit-post__title--mobile'>Post a code snippet</h2>
            <div className='submit-post__container'>
                <div className='submit-post__codes'>
                    <div className='submit-post__editor submit-post__editor--preview'>
                        <iframe id='preview' className='submit-post__editor-code submit-post__editor-code--preview' srcDoc={preview}></iframe>
                    </div>
                    <div className='submit-post__editor'>
                        <label className='submit-post__form-title' htmlFor='html'>HTML</label>
                        <textarea
                            id='html'
                            name='html'
                            className='submit-post__editor-code'
                            value={htmlCode}
                            onChange={(event) => setHtmlCode(event.currentTarget.value)}
                        >
                        </textarea>
                    </div>
                    <div className='submit-post__editor'>
                        <label className='submit-post__form-title' htmlFor='css'>CSS</label>
                        <textarea
                            id='css'
                            name='css'
                            className='submit-post__editor-code'
                            value={cssCode}
                            onChange={(event) => setCssCode(event.currentTarget.value)}
                        >
                        </textarea>
                    </div>
                    <div className='submit-post__editor'>
                        <label className='submit-post__form-title' htmlFor='js'>JavaScript</label>
                        <textarea
                            id='js'
                            name='js'
                            className='submit-post__editor-code'
                            value={jsCode}
                            onChange={(event) => setJsCode(event.currentTarget.value)}
                        >
                        </textarea>
                    </div>
                </div>
                <div className='submit-post__forms'>
                    <form className='submit-post__form' onSubmit={(event) => handleOnSubmit(event)}>
                        <h2 className='submit-post__title submit-post__title--td'>Post a code snippet</h2>
                        <div className='submit-post__form-detail'>
                            <label className='submit-post__form-title' htmlFor='title'>Title</label>
                            <input className='submit-post__form-input' id='title' name='title' required></input>
                        </div>
                        <div className='submit-post__form-detail'>
                            <label className='submit-post__form-title' htmlFor='description'>Description</label>
                            <textarea className='submit-post__form-input submit-post__form-input--description' id='description' name='description'></textarea>
                        </div>
                        <div className='submit-post__form-detail'>
                            <label className='submit-post__form-title' htmlFor='file'>Thumbnail</label>
                            <input className='submit-post__file-input' type='file' id='file' name='file' required></input>
                        </div>
                        <div className='submit-post__actions'>
                            <button className='submit-post__button' type='reset' onClick={handleReset}>Reset</button>
                            <button className='submit-post__button' type='submit' disabled={posting}>{posting ? 'Posting...' : 'Post'}</button>
                        </div>
                    </form>
                    <form className='submit-post__prompter' onSubmit={(event) => handleOnSubmitPrompt(event)}>
                        <label className='submit-post__form-title submit-post__form-title--prompter' htmlFor='prompt'>Generate code with AI</label>
                        <input className='submit-post__form-input submit-post__form-input--prompter' id='prompt' name='prompt' value={prompt} onChange={(event) => setPrompt(event.target.value)}></input>
                        <button className={`submit-post__prompter-button ${fetchingAi ? 'submit-post__prompter-button--loading' : ''}`} type='submit' disabled={fetchingAi}>{fetchingAi ? 'Wait for it...' : 'Go'}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubmitPost;