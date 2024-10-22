import { useNavigate } from 'react-router-dom';
import FeedPost from '../../components/FeedPost/FeedPost';
import img1 from '../../assets/images/200x150.png';
import img2 from '../../assets/images/200x200.png';
import img3 from '../../assets/images/200x250.png';
import img4 from '../../assets/images/200x300.png';
import './MainFeed.scss';

const MainFeed: React.FC = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/submit');
    };
    
    return (
        <div className='main-feed'>
            <button className='main-feed__add-button' onClick={handleOnClick}>+ New Post</button>
            <FeedPost img={img1} />
            <FeedPost img={img2} />
            <FeedPost img={img3} />
            <FeedPost img={img4} />
            <FeedPost img={img1} />
            <FeedPost img={img3} />
            <FeedPost img={img3} />
            <FeedPost img={img3} />
            <FeedPost img={img4} />
            <FeedPost img={img2} />
            <FeedPost img={img4} />
            <FeedPost img={img1} />
            <FeedPost img={img2} />
            <FeedPost img={img3} />
            <FeedPost img={img4} />
            <FeedPost img={img3} />
            <FeedPost img={img4} />
            <FeedPost img={img1} />
        </div>
    );
};

export default MainFeed;