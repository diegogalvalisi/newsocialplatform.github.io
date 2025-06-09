import React from 'react';
import Profile from '../components/Profile';
import PostForm from '../components/PostForm';
import Feed from '../components/Feed';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>User Profile</h1>
            <Profile />
            <PostForm />
            <Feed />
        </div>
    );
};

export default HomePage;