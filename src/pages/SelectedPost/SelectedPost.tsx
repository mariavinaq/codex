import { useEffect, useRef, useState } from 'react';
import copy from '../../assets/images/copy.png';
import comments from '../../assets/images/comments.png';
import toBookmark from '../../assets/images/to-bookmark.png';
import Comments from '../../components/Comments/Comments';
import './SelectedPost.scss';
import { useParams } from 'react-router-dom';
import { getPost } from '../../services/codex-api';
import Loader from '../../components/Loader/Loader';
import agoTimestamp from '../../utils/utils';

interface Comment {
    id: number;
    comment_username: string;
    comment_avatar: string;
    timestamp: Date;
    comment: string;
}

interface Post {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    html: string;
    css: string;
    js: string;
    likes: number;
    timestamp: Date;
    post_username: string;
    post_avatar: string;
    comments: Comment[];
}

const SelectedPost = () => {
    const baseUrl = import.meta.env.VITE_API_URL;
    const params = useParams<{ postId: string }>();
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [htmlCode, setHtmlCode] = useState('');
    const [cssCode, setCssCode] = useState('');
    const [jsCode, setJsCode] = useState('');
    const [preview, setPreview] = useState('');

    useEffect(() => {
        setIsLoading(true);
        const retrievePost = async () => {
            if (params.postId) {
                const post = await getPost(params.postId);
                setSelectedPost(post);
                setHtmlCode(post.html);
                setCssCode(post.css);
                setJsCode(post.js);
                setIsLoading(false);
            } else {
                console.error("No postId provided");
            }
        };
        retrievePost();
    }, [params.postId]);

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
        <>
            {isLoading ? <Loader /> : selectedPost &&
                <div className='selected-post'>
                    <div className='selected-post__profile'>
                        <img className='selected-post__avatar' src={`${baseUrl}${selectedPost.post_avatar}`} />
                        <p className='selected-post__username'>{selectedPost.post_username}</p>
                        <time className='comment__timestamp'>• {agoTimestamp(selectedPost.timestamp)}</time>
                    </div>
                    <h1 className='selected-post__title'>{selectedPost.title}</h1>
                    <div className='selected-post__main'>
                        <div className='selected-post__codes'>
                            <div className='selected-post__editor selected-post__editor--preview'>
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
                                    onKeyUp={(event) => setHtmlCode(event.currentTarget.value)}
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
                                    onKeyUp={(event) => setCssCode(event.currentTarget.value)}
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
                                    onKeyUp={(event) => setJsCode(event.currentTarget.value)}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className='selected-post__more'>
                            <p className='selected-post__description'>{selectedPost.description}</p>
                            <div className='selected-post__actions'>
                                <button className='selected-post__action-button' onClick={handleShowComments}>
                                    <img className='selected-post__action-icon selected-post__action-icon--comments' src={comments} />
                                    {selectedPost.comments.length}
                                </button>
                                <button className='selected-post__action-button'>
                                    <img className='selected-post__action-icon' src={toBookmark} />
                                </button>
                            </div>
                            <div ref={scrollRef}>
                                <Comments comments={selectedPost.comments} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default SelectedPost;