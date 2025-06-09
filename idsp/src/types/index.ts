export interface User {
    id: string;
    username: string;
    displayName: string;
    bio: string;
    avatarUrl: string;
    createdAt: Date;
}

export interface Post {
    id: string;
    content: string;
    createdAt: Date;
    author: User;
}

export interface Activity {
    id: string;
    type: string;
    actor: User;
    object: Post;
    published: Date;
}