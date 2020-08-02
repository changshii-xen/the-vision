import React, { useContext, useEffect } from 'react';
import Search from '../layout/Searchbar';
import Posts from '../posts/Posts';
import PostForm from '../posts/PostForm';
import 'materialize-css/dist/css/materialize.min.css';
import AuthContext from '../../context/auth/authContext';


const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser(); 
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <Search />
            <div className='row'>
                <div className= 'box' >
                    <PostForm />
                </div>
            </div>
            <div className='row'>
                <div className='box'>
                <Posts />
                </div>
            </div>
        </div>
    )
}

export default Home
