import { CommentsProps } from '../../interfaces';
import comment from '../../assets/images/comment.png';
import Comment from '../Comment/Comment';
import './Comments.scss';

const Comments: React.FC<CommentsProps> = ({ comments, submitComment }) => {
    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.target as HTMLFormElement;
        event.preventDefault();
        submitComment(event);
        form.reset();
    }
    return (
        <div className='comments'>
            <h2 className='comments__title'>Comments</h2>
            <form className='comments__form' onSubmit={(event) => handleOnSubmit(event)}>
                <textarea className='comments__input' name='comment'></textarea>
                <button className='comments__button' type='submit'>
                    <img className='comments__button-icon' src={comment} />
                </button>
            </form>
            <div className='comments__list'>
                {comments.map((comment) => <Comment comment={comment} key={comment.id} />)}
            </div>
        </div>
    );
};

export default Comments;