import React from 'react';

interface ProfileProps {
    username: string;
    bio: string;
    profilePicture: string;
}

const Profile: React.FC<ProfileProps> = ({ username, bio, profilePicture }) => {
    return (
        <div className="profile">
            <img src={profilePicture} alt={`${username}'s profile`} className="profile-picture" />
            <h2 className="username">{username}</h2>
            <p className="bio">{bio}</p>
        </div>
    );
};

export default Profile;