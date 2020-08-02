import React, { useContext } from 'react';
import PropTypes from "prop-types";
import 'materialize-css/dist/css/materialize.min.css';
import PostContext from '../../context/post/postContext'

const PostItem = ({post}) => {
    const postContext = useContext(PostContext);
    const { deletePost, setCurrent, clearCurrent } = postContext
    const{ id, tag, content } = post

    const onDelete = () => {
        deletePost(id);
        clearCurrent();
    }
    return (
        <div className='card' >
            <div className='post'>
            <h5>
            {id}{''} <br/><br/>
            <div>
            <i className='fa fa-paperclip' />
            </div>  
            {'    '}{tag}<br/> <br/> {''}
            <i className='far fa-newspaper' />
            <div>
            {''}{content}
            </div>
            </h5> 
            <div className='box2'>
            <p>
                <button className='btn btn-sm' onClick={()=> setCurrent(post)}><i className='fas fa-edit' /></button>{' '}{' '}{' '}
                <button className='btn btn-sm' onClick={onDelete}><i className='fas fa-trash' /></button>{' '}
                <button className='btn btn-sm'><i className='fas fa-star' /></button>{' '}
                
            </p>
            </div>
            </div>
        </div>
    );
};

PostItem.propTypes ={
    post: PropTypes.object.isRequired
}

export default PostItem
