import avatar from '../../assets/images/avatar.png';
import './Comment.scss';

const Comment = () => {
    return (
        <div className='comment'>
            <div className='comment__header'>
                <div className='comment__profile'>
                    <img className='comment__avatar' src={avatar} />
                    <p className='comment__username'>username</p>
                </div>
                <time className='comment__timestamp'>• 5 days ago</time>
            </div>
            <p className='comment__comment'>This is a sample comment, just as an example.</p>
        </div>
    );
}

export default Comment;