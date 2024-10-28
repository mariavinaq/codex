import { baseUrl } from '../../services/codex-api';
import { agoTimestamp } from '../../utils/utils';
import { CommentProps } from '../../interfaces';
import { useNavigate } from 'react-router-dom';
import './Comment.scss';

const Comment: React.FC<CommentProps> = ({ comment }) => {
    const navigate = useNavigate();
    const handleClickUser = () => {
        navigate(`/users/${comment.user_id}`)
    };

    return (
        <div className='comment'>
            <div className='comment__header'>
                <div className='comment__profile'>
                    <img className='comment__avatar' src={`${baseUrl}${comment.avatar}`} onClick={handleClickUser}/>
                    <p className='comment__username' onClick={handleClickUser}>{comment.username}</p>
                </div>
                <time className='comment__timestamp'>• {agoTimestamp(comment.timestamp)}</time>
            </div>
            <p className='comment__comment'>{comment.comment}</p>
        </div>
    );
}

export default Comment;