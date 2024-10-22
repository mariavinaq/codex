import { useNavigate } from 'react-router-dom';
import avatar from '../../assets/images/avatar.png';
import './FeedPost.scss';

interface FeedPostProps {
    img: string;
}

const FeedPost: React.FC<FeedPostProps> = ({ img }) => {
    const navigate = useNavigate();
    const placeholderId: number = 1;

    const handleClickPost = () => {
        navigate(`/posts/${placeholderId}`)
    };

    return (
        <div className='feed-post'>
            <div className='feed-post__header'>
                <img className='feed-post__avatar' src={avatar} alt='user avatar' />
                <p className='feed-post__username'>username</p>
            </div>
            <div className='feed-post__main' onClick={handleClickPost}>
                <div className='feed-post__media-container'>
                    <img className='feed-post__media' src={img} />
                </div>
                <p className='feed-post__title'>This is a sample title for this specific post, just for an example.</p>
            </div>
        </div>
    );
};

export default FeedPost;