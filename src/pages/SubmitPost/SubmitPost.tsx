import { useEffect, useState } from 'react';
import './SubmitPost.scss';
import { useNavigate } from 'react-router-dom';
import { postPost } from '../../services/codex-api';

const SubmitPost = () => {
    const navigate = useNavigate();
    const [htmlCode, setHtmlCode] = useState('');
    const [cssCode, setCssCode] = useState('');
    const [jsCode, setJsCode] = useState('');
    const [preview, setPreview] = useState('');

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
            alert('Code published. Click OK to return to homepage.');
            navigate('/');
        } else {
            alert('Code unsuccessfully published. Click OK to try again.');
        };
    };

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submitPost(event);
    };

    return (
        <div className='submit-post'>
            <form className='submit-post__form' onSubmit={(event) => handleOnSubmit(event)}>
                <div className='submit-post__codes'>
                    <div className='submit-post__editor submit-post__editor--preview'>
                    <label className='submit-post__form-title'>Preview</label>
                        <iframe id='preview' className='submit-post__editor-code submit-post__editor-code--preview' srcDoc={preview}></iframe>
                    </div>
                    <div className='submit-post__editor'>
                        <label className='submit-post__form-title' htmlFor='html'>HTML</label>
                        <textarea
                            id='html'
                            name='html'
                            className='submit-post__editor-code'
                            onKeyUp={(event) => setHtmlCode(event.currentTarget.value)}
                        >
                        </textarea>
                    </div>
                    <div className='submit-post__editor'>
                        <label className='submit-post__form-title' htmlFor='css'>CSS</label>
                        <textarea
                            id='css'
                            name='css'
                            className='submit-post__editor-code'
                            onKeyUp={(event) => setCssCode(event.currentTarget.value)}
                        >
                        </textarea>
                    </div>
                    <div className='submit-post__editor'>
                        <label className='submit-post__form-title' htmlFor='js'>JavaScript</label>
                        <textarea
                            id='js'
                            name='js'
                            className='submit-post__editor-code'
                            onKeyUp={(event) => setJsCode(event.currentTarget.value)}
                        >
                        </textarea>
                    </div>
                </div>
                <div className='submit-post__form-details'>
                    <div className='submit-post__form-detail'>
                        <label className='submit-post__form-title' htmlFor='title'>Title</label>
                        <input className='submit-post__form-input' id='title' name='title'></input>
                    </div>
                    <div className='submit-post__form-detail'>
                        <label className='submit-post__form-title' htmlFor='description'>Description</label>
                        <textarea className='submit-post__form-input submit-post__form-input--description' id='description' name='description'></textarea>
                    </div>
                    <div className='submit-post__form-detail'>
                        <label className='submit-post__form-title' htmlFor='file'>Thumbnail</label>
                        <input type='file' id='file' name='file'></input>
                    </div>
                    <div className='submit-post__actions'>
                        <button className='submit-post__post-button'>Cancel</button>
                        <button className='submit-post__post-button' type='submit'>Post</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SubmitPost;