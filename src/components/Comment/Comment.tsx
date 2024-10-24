import './Comment.scss';

interface CommentProps {
    comment: {
        comment_username: string;
        comment_avatar: string;
        timestamp: number;
        comment: string;
    }
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
    const baseUrl = import.meta.env.VITE_API_URL;

    return (
        <div className='comment'>
            <div className='comment__header'>
                <div className='comment__profile'>
                    <img className='comment__avatar' src={`${baseUrl}${comment.comment_avatar}`} />
                    <p className='comment__username'>{comment.comment_username}</p>
                </div>
                <time className='comment__timestamp'>• {new Date(comment.timestamp).toLocaleDateString()}</time>
            </div>
            <p className='comment__comment'>{comment.comment}</p>
        </div>
    );
}

export default Comment;