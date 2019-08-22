import React from 'react';

class PostItem extends React.Component {
    render() {

        const image = {backgroundImage: this.props.image};

        return (
            <div className='postItemContainer'>
                <div className='postItem' style={image}/>
            </div>
        )
    }
}

export default PostItem;