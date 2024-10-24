import Comment from '../Comment/Comment';
import comment from '../../assets/images/comment.png';
import './Comments.scss';

interface Comment {
    comment_username: string;
    comment_avatar: string;
    timestamp: number;
    comment: string;
}

interface CommentsProps {
    comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
    return (
        <div className='comments'>
            <h2 className='comments__title'>Comments</h2>
            <form className='comments__form'>
                <textarea className='comments__input' name='comment'></textarea>
                <button className='comments__button' type='submit'>
                    <img className='comments__button-icon' src={comment} />
                </button>
            </form>
            <div className='comments__list'>
                {comments.map((comment) => <Comment comment={comment} />)}
            </div>
        </div>
    );
};

export default Comments;