import React, {Fragment, useContext, useEffect} from 'react';
import PostContext from '../../context/post/postContext'
import PostItem from './PostItem'


const Posts = () => {
    const postContext = useContext(PostContext);

    const { posts, filtered, getPosts, loading } = postContext;

    useEffect(() => {
        getPosts();
        //eslint-disable-next-line
      }, []);

    if(posts !== null && posts.length === 0){
        return <h4>Create new post</h4>
    }

    return (
        <Fragment>
            {filtered !== null ? filtered.map((post) => (<PostItem key={post._id} post={post} />)) :
            posts.map(post => (
                <PostItem key={post._id} post={post} /> 
            ))
            }
        </Fragment>
    )
}

export default Posts
