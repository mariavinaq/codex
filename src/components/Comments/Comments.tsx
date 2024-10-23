import Comment from '../Comment/Comment';
import comment from '../../assets/images/comment.png';
import './Comments.scss';

const Comments = () => {
    return (
        <div className='comments'>
            <h2 className='comments__title'>Comments</h2>
            <form className='comments__form'>
                <textarea className='comments__input'></textarea>
                <button className='comments__button' type='submit'>
                    <img className='comments__button-icon' src={comment} />
                </button>
            </form>
            <div className='comments__list'>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    );
};

export default Comments;