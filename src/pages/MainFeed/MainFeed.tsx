import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPosts } from '../../services/codex-api.ts';
import { SimplePost } from '../../interfaces.ts';
import FeedPost from '../../components/FeedPost/FeedPost';
import './MainFeed.scss';

const MainFeed = () => {
    const navigate = useNavigate();
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

    const handleOnClick = () => {
        navigate('/submit');
    };

    return (
        <div className='main-feed'>
            <button className='main-feed__add-button' onClick={handleOnClick}>+ New Post</button>
            {postsList.map((post) => <FeedPost post={post} key={post.id} />)}
            {postsList.map((post) => <FeedPost post={post} key={post.id} />)}
            {postsList.map((post) => <FeedPost post={post} key={post.id} />)}
        </div>
    );
};

export default MainFeed;