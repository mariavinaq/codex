import { useNavigate } from 'react-router-dom';
import { FeedPostProps } from '../../interfaces';
import { agoTimestamp } from '../../utils/utils';
import { baseUrl, getComments, postBookmark } from '../../services/codex-api';
import like from '../../assets/images/like.png';
import comments from '../../assets/images/comments.png';
import toBookmark from '../../assets/images/to-bookmark.png';
import './FeedPost.scss';
import { useEffect, useState } from 'react';

const FeedPost: React.FC<FeedPostProps> = ({ post }) => {
    const navigate = useNavigate();
    const mediaExt = post.thumbnail.split('.').pop() || '';
    const videoExt = ['mp4', 'avi', 'mov', 'webm', 'mkv'];
    const useVideoTag = videoExt.includes(mediaExt.toLowerCase());
    const [commentsCount, setCommentsCount] = useState();

    const handleClickPost = () => {
        navigate(`/posts/${post.id}`)
    };

    const handleBookmark = async () => {
        const reference = {
            post_id: post.id
        };
        await postBookmark(reference);
    };

    useEffect(() => {
        const retrieveComments = async () => {
            if (post.id) {
                const comments = await getComments(`${post.id}`);
                if (comments) {
                    setCommentsCount(comments.length)
                }
            } 
        };
        retrieveComments();
    }, [post.id])

    return (
        <div className='feed-post'>
            <div className='feed-post__header'>
                <img className='feed-post__avatar' src={`${baseUrl}${post.avatar}`} alt='user avatar' />
                <p className='feed-post__username'>{post.username}</p>
                <time className='feed-post__timestamp'>• {agoTimestamp(post.timestamp)}</time>
            </div>
            <div className='feed-post__main' onClick={handleClickPost}>
                <div className='feed-post__media-container'>
                    {
                        useVideoTag ? <video className='feed-post__media' src={`${baseUrl}${post.thumbnail}`} autoPlay muted loop></video>
                            : <img className='feed-post__media' src={`${baseUrl}${post.thumbnail}`} />
                    }
                </div>
                <p className='feed-post__title'>{post.title}</p>
            </div>
            <div className='feed-post__actions'>
                <div className='feed-post__action-container'>
                    <img className='feed-post__action-icon' src={like} />
                    <span>{post.likes}</span>
                </div>
                <div className='feed-post__action-container'>
                    <img className='feed-post__action-icon' src={comments} />
                    <span>{commentsCount}</span>
                </div>
                <div className='feed-post__action-container feed-post__action-container--bookmark'>
                    <img className='feed-post__action-icon' src={toBookmark} onClick={handleBookmark} />
                </div>
            </div>
        </div>
    );
};

export default FeedPost;