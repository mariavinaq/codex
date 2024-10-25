import { baseUrl } from '../../services/codex-api';
import { agoTimestamp } from '../../utils/utils';
import { CommentProps } from '../../interfaces';
import './Comment.scss';

const Comment: React.FC<CommentProps> = ({ comment }) => {
    return (
        <div className='comment'>
            <div className='comment__header'>
                <div className='comment__profile'>
                    <img className='comment__avatar' src={`${baseUrl}${comment.comment_avatar}`} />
                    <p className='comment__username'>{comment.comment_username}</p>
                </div>
                <time className='comment__timestamp'>• {agoTimestamp(comment.timestamp)}</time>
            </div>
            <p className='comment__comment'>{comment.comment}</p>
        </div>
    );
}

export default Comment;