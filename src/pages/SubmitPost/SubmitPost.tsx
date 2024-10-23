import { useState } from 'react';
import './SubmitPost.scss';

const SubmitPost = () => {
    const [htmlCode, setHtmlCode] = useState('');
    const [cssCode, setCssCode] = useState('');
    const [jsCode, setJsCode] = useState('');
    const previewSetup = `
        <html>
            <body>${htmlCode}</body>
            <style>${cssCode}</style>
            <script>${jsCode}</script>
        </html>
    `;
    const [preview, setPreview] = useState(previewSetup);

    const handleOnKeyUp = () => {
        setPreview(previewSetup)
    };

    return (
        <div className='submit-post'>
            <form className='submit-post__form'>
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
                            onKeyUp={(event) => {
                                setHtmlCode(event.currentTarget.value);
                                handleOnKeyUp()
                            }}
                        >
                        </textarea>
                    </div>
                    <div className='submit-post__editor'>
                        <label className='submit-post__form-title' htmlFor='css'>CSS</label>
                        <textarea
                            id='css'
                            name='css'
                            className='submit-post__editor-code'
                            onKeyUp={(event) => {
                                setCssCode(event.currentTarget.value);
                                handleOnKeyUp()
                            }}
                        >
                        </textarea>
                    </div>
                    <div className='submit-post__editor'>
                        <label className='submit-post__form-title' htmlFor='js'>JavaScript</label>
                        <textarea
                            id='js'
                            name='js'
                            className='submit-post__editor-code'
                            onKeyUp={(event) => {
                                setJsCode(event.currentTarget.value);
                                handleOnKeyUp()
                            }}
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