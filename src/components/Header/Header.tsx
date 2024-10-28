import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../../services/codex-api';
import code from '../../assets/images/code.png';
import bookmark from '../../assets/images/bookmark.png';
import { baseUrl } from '../../services/codex-api';
import './Header.scss';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState('')
    const [currentUserAvatar, setCurrentUserAvatar] = useState('')
    const userId = 1;

    useEffect(() => {
        const retrieveUser = async () => {
            const user = await getUser(userId);
            if (user) {
                setCurrentUser(user.username);
                setCurrentUserAvatar(`${baseUrl}${user.avatar}`);
            }
        }
        retrieveUser();
    });

    const handleOnClickHome = () => {
        navigate('/');
    }

    const handleOnClickSubmit = () => {
        navigate('/submit');
    }

    const handleOnClickBookmarks = () => {
        navigate('/bookmarks');
    }

    return (
        <header className='header'>
            <div className='header__logo-container' onClick={handleOnClickHome}>
                <img className='header__logo-icon' src={code} alt='site logo' />
                <h1 className='header__logo-title'>c o d e x</h1>
            </div>
            <ul className="header__nav">
                <li className="header__nav-link" onClick={handleOnClickHome}>Explore</li>
                <li className="header__nav-link" onClick={handleOnClickSubmit}>Post</li>
                <li className="header__nav-link">About</li>
            </ul>
            <div className='header__user-pages'>
                <img className='header__bookmark' src={bookmark} onClick={handleOnClickBookmarks}/>
                <div className='header__profile'>
                    <img className='header__avatar' src={currentUserAvatar} />
                    <p className='header__username'>{currentUser}</p>
                </div>
            </div>
        </header>
    );
};

export default Header;