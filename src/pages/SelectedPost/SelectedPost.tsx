import { useRef, useState } from 'react';
import avatar from '../../assets/images/avatar.png';
import copy from '../../assets/images/copy.png';
import comments from '../../assets/images/comments.png';
import toBookmark from '../../assets/images/to-bookmark.png';
import Comments from '../../components/Comments/Comments';
import './SelectedPost.scss';

const SelectedPost = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
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

    const handleShowComments = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView()
        };
    };

    return (
        <div className='selected-post'>
            <div className='selected-post__profile'>
                <img className='selected-post__avatar' src={avatar} />
                <p className='selected-post__username'>username</p>
            </div>
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
            <p className='selected-post__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut erat orci. Mauris elementum odio interdum odio ornare, id gravida dolor aliquet. Cras sit amet nulla turpis. Sed commodo metus et ultricies facilisis. Nunc quis sapien pellentesque, tempus lectus quis, consectetur purus. Aliquam eget maximus arcu. Praesent maximus mauris risus, vel consectetur dolor pellentesque dictum. Ut molestie lobortis sem, in semper mi cursus quis. Vivamus eget tempus urna. Vivamus vestibulum vulputate mauris eu bibendum. Donec orci velit, tempor eget nunc ac, cursus sodales eros. Nullam non cursus velit.</p>
            <div className='selected-post__actions'>
                <button className='selected-post__action-button' onClick={handleShowComments}>
                    <img className='selected-post__action-icon selected-post__action-icon--comments' src={comments} />
                    3
                </button>
                <button className='selected-post__action-button'>
                    <img className='selected-post__action-icon' src={toBookmark} />
                </button>
            </div>
            <div ref={scrollRef}>
                <Comments />
            </div>
        </div>
    );
};

export default SelectedPost;