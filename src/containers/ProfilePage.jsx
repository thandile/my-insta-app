import React from 'react';
import ProfileImage from '../components/ProfileImage'


class ProfilePage extends React.Component {
    render() {
        return (
            <div className='profilePage'>
                <div className='profilePageContainer'>
                    <div className='profilePageHeadContainer'>
                        <ProfileImage/>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProfilePage;