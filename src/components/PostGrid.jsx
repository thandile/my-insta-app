import React from 'react';
import PostItem from '../components/PostItem';

const image1 = require('../assets/image1.jpeg');
const image2 = require('../assets/image2.jpeg');
const image3 = require('../assets/image3.jpeg');
const image4 = require('../assets/image4.jpeg');
const image5 = require('../assets/image5.jpeg');
const image6 = require('../assets/image6.jpeg');

class PostGrid extends React.Component {
    listOfImages() {
        const list = [image1, image2, image3, image4, image5, image6];

        return list.map((item, index) => {
            return <PostItem image={item} key={index} />
        })
    }

    render() {
        return (
            <div className='postGridContainer'>
                <div className='postGrid'>
                    {this.listOfImages()}
                </div>
            </div>

        )
    }
}

export default PostGrid;