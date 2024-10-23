import { useNavigate } from 'react-router-dom';
import code from '../../assets/images/code.png';
import bookmark from '../../assets/images/bookmark.png';
import avatar from '../../assets/images/avatar.png';
import './Header.scss';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/');
    }
    return (
        <header className='header'>
            <div className='header__logo-container' onClick={handleOnClick}>
                <img className='header__logo-icon' src={code} alt='site logo' />
                <p className='header__logo-title'>c o d e x</p>
            </div>
            <div className='header__user-pages'>
                <img className='header__bookmark' src={bookmark} />
                <div className='header__profile'>
                    <img className='header__avatar' src={avatar} />
                    <p className='header__username'>username</p>
                </div>
            </div>
        </header>
    );
};

export default Header;