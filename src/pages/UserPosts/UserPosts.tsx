import { useEffect, useState } from 'react';
import { getUser, getUserPosts, } from '../../services/codex-api.ts';
import { SimplePost } from '../../interfaces.ts';
import FeedPost from '../../components/FeedPost/FeedPost.tsx';
import { useParams } from 'react-router-dom';
import './UserPosts.scss';

const UserPosts = () => {
    const params = useParams();
    const [postsList, setPostsList] = useState<SimplePost[]>([]);
    const [selectedUser, setSelectedUser] = useState('')

    useEffect(() => {
        const retrieveUser = async () => {
            if (params.userId) {
                const user = await getUser(params.userId);
                if (user) {
                    setSelectedUser(user.username);
                }
            }
        }
        retrieveUser();
    });
    
    useEffect(() => {
        const retrieveUserPosts = async () => {
            if (params.userId) {
                const posts = await getUserPosts(params.userId)
                if (posts) {
                    const sortedPosts = posts.sort((a: SimplePost, b: SimplePost) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
                    setPostsList(sortedPosts);
                }
            }
        };
        retrieveUserPosts();
    }, [params.userId]);

    return (
        <div className='bookmarks'>
            <h1 className='bookmarks__title'>Code snippets by {selectedUser}</h1>
            <div className={`bookmarks__list bookmarks__list${postsList.length > 4 ? '--more': ''}`}>
                {postsList.map((post) => <FeedPost post={post} key={post.id} />)}
            </div>
        </div>
    );
};

export default UserPosts;