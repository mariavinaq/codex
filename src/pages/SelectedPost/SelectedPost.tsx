import { useState } from 'react';
import copy from '../../assets/images/copy.png';
import Comments from '../../components/Comments/Comments';
import './SelectedPost.scss';

const SelectedPost = () => {
    const htmlSample = `<h1>Testing</h1>
<button id="button" onclick="changeColor()">hi</button>`;
    const cssSample = `button {
        color:red;
}
button:hover {
    background-color: yellow;
}`;
    const jsSample = `function changeColor(){
        document.getElementById("button").style.color = "blue"
}`;
    const [htmlCode, setHtmlCode] = useState(htmlSample);
    const [cssCode, setCssCode] = useState(cssSample);
    const [jsCode, setJsCode] = useState(jsSample);
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

    const handleCopyCode = async (code: string, codeType: string) => {
        try {
            await navigator.clipboard.writeText(code);
            alert(`${codeType} copied to clipboard.`);
        } catch (error) {
            console.error(error);
            alert(`Error copying ${codeType} code to clipboard.`);
        }
    };

    return (
        <>
            <div className='selected-post'>
                <h1 className='selected-post__title'>This is a sample title for this specific post, just for an example.</h1>
                <div className='selected-post__editor selected-post__editor--preview'>
                    {/* <label className='selected-post__editor-title'>Preview</label> */}
                    <iframe id='preview' className='selected-post__editor-code selected-post__editor-code--preview' srcDoc={preview}></iframe>
                </div>
                <div className='selected-post__editor'>
                    <div className='selected-post__editor-header'>
                        <label className='selected-post__editor-title' htmlFor='html'>HTML</label>
                        <img className='selected-post__copy-code' src={copy} onClick={() => handleCopyCode(htmlCode, 'HTML')} />
                    </div>
                    <textarea
                        id='html'
                        name='html'
                        className='selected-post__editor-code'
                        defaultValue={htmlCode}
                        onKeyUp={(event) => {
                            setHtmlCode(event.currentTarget.value);
                            handleOnKeyUp()
                        }}
                    >
                    </textarea>
                </div>
                <div className='selected-post__editor'>
                    <div className='selected-post__editor-header'>
                        <label className='selected-post__editor-title' htmlFor='css'>CSS</label>
                        <img className='selected-post__copy-code' src={copy} onClick={() => handleCopyCode(cssCode, 'CSS')} />
                    </div>
                    <textarea
                        id='css'
                        name='css'
                        className='selected-post__editor-code'
                        defaultValue={cssCode}
                        onKeyUp={(event) => {
                            setCssCode(event.currentTarget.value);
                            handleOnKeyUp()
                        }}
                    >
                    </textarea>
                </div>
                <div className='selected-post__editor'>
                    <div className='selected-post__editor-header'>
                        <label className='selected-post__editor-title' htmlFor='js'>JavaScript</label>
                        <img className='selected-post__copy-code' src={copy} onClick={() => handleCopyCode(jsCode, 'JavaScript')} />
                    </div>
                    <textarea
                        id='js'
                        name='js'
                        className='selected-post__editor-code'
                        defaultValue={jsCode}
                        onKeyUp={(event) => {
                            setJsCode(event.currentTarget.value);
                            handleOnKeyUp()
                        }}
                    >
                    </textarea>
                </div>
            </div>
            <Comments />
        </>
    );
};

export default SelectedPost;