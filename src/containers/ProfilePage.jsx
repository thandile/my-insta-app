import React from 'react';
import ProfileImage from '../components/ProfileImage';
import PostGrid from '../components/PostGrid';


class ProfilePage extends React.Component {
    render() {
        return (
            <div className='profilePage'>
                <div className='profilePageContainer'>
                    <div className='profilePageHeadContainer'>
                        <ProfileImage/>
                    </div>
                    <div className='profilePageGridContainer'>
                        <PostGrid />
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfilePage;