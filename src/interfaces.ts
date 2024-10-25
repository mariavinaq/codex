interface Post {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    html: string;
    css: string;
    js: string;
    likes: number;
    timestamp: Date;
    post_username: string;
    post_avatar: string;
}

interface SimplePost {
    id: number,
    timestamp: Date,
    username: number,
    title: string,
    thumbnail: string,
    likes: number,
    avatar: string,
}

interface FeedPostProps {
    post: SimplePost;
}

interface Comment {
    id: number;
    comment_username: string;
    comment_avatar: string;
    timestamp: Date;
    comment: string;
}

interface NewComment {
    comment: string;
}

interface CommentProps {
    comment: Comment;
}

interface CommentsProps {
    comments: Comment[];
    submitComment: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface Reference {
    post_id: number;
}


export type { Post, SimplePost, FeedPostProps, Comment, NewComment, CommentProps, CommentsProps, Reference };