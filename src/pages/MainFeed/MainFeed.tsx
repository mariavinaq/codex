import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getPosts } from '../../services/codex-api.ts';
import { SimplePost } from '../../interfaces.ts';
import FeedPost from '../../components/FeedPost/FeedPost';
import add from '../../assets/images/add.png';
import up from '../../assets/images/up.png';
import './MainFeed.scss';

const MainFeed = () => {
    const navigate = useNavigate();
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [postsList, setPostsList] = useState<SimplePost[]>([]);

    useEffect(() => {
        const retrievePosts = async () => {
            const posts = await getPosts()
            if (posts) {
                const sortedPosts = posts.sort((a: SimplePost, b: SimplePost) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
                setPostsList(sortedPosts);
            }
        };
        retrievePosts();
    }, []);

    const handleAddPost = () => {
        navigate('/submit');
    };

    const handleScrollUp = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView()
        };
    };

    return (
        <>
            <div className='main-feed__top' ref={scrollRef}></div>
            <div className='main-feed'>
                <div className='main-feed__actions'>
                    <img className='main-feed__action' onClick={handleAddPost} src={add} alt='icon to add a post' />
                    <img className='main-feed__action' onClick={handleScrollUp} src={up} alt='icon to go up' />
                </div>
                {postsList.map((post) => <FeedPost post={post} key={post.id} />)}
            </div>
        </>

    );
};

export default MainFeed;