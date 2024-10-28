import { useNavigate } from 'react-router-dom';
import robot from '../../assets/images/robot.svg';
import './NoBookmarks.scss';

const NoBookmarks = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/');
    }
    return (
        <div className='no-bookmarks'>
            <img className='no-bookmarks__robot' src={robot}/>
            <p className='no-bookmarks__message'>
                None for now...
                <span className='no-bookmarks__message--feed' onClick={handleOnClick}>go back to the feed</span> and bookmark something!
            </p>
        </div>
    );
}

export default NoBookmarks;