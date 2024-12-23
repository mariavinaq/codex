import { useEffect, useState } from 'react';
import { getBookmarks, } from '../../services/codex-api.ts';
import { SimplePost } from '../../interfaces.ts';
import FeedPost from '../../components/FeedPost/FeedPost';
import NoBookmarks from '../../components/NoBookmarks/NoBookmarks.tsx';
import './Bookmarks.scss';

const Bookmarks = () => {
    const userId = '1';
    const [postsList, setPostsList] = useState<SimplePost[]>([]);
    
    useEffect(() => {
        const retrieveBookmarks = async () => {
            const posts = await getBookmarks(userId)
            if (posts) {
                const sortedPosts = posts.sort((a: SimplePost, b: SimplePost) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
                setPostsList(sortedPosts);
            }
        };
        retrieveBookmarks();
    }, []);

    return (
        <div className='bookmarks'>
            <h1 className='bookmarks__title'>Code for later</h1>
            <div className={`bookmarks__list bookmarks__list${postsList.length > 4 ? '--more': ''}`}>
                {
                    postsList.length === 0 ? <NoBookmarks />
                        : postsList.map((post) => <FeedPost post={post} key={post.id} />)
                }
            </div>
        </div>
    );
};

export default Bookmarks;