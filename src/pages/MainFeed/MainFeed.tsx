import { useNavigate } from 'react-router-dom';
import FeedPost from '../../components/FeedPost/FeedPost';
import './MainFeed.scss';
import { useEffect, useState } from 'react';
import { getPosts } from '../../services/codex-api.ts';

interface Post {
    id: number,
    username: number,
    title: string,
    thumbnail: string,
    avatar: string,
}

const MainFeed = () => {
    const navigate = useNavigate();
    const [postsList, setPostsList] = useState<Post[]>([]);

    useEffect(() => {
        const retrievePosts = async () => {
            const posts = await getPosts()
            console.log(posts)
            if (posts) {
                setPostsList(posts);
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