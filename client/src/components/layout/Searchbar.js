import React, {useContext, useRef, useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import PostContext from '../../context/post/postContext'


const Searchbar = ({title}) => {
    const postContext = useContext(PostContext);
    const text = useRef('');

    const { filterPosts, clearFilter, filtered } = postContext;

    useEffect(() => {
        if (filtered === null){
            text.current.value = '';
        }
    });


    const onChange = e => {
        if (text.current.value !== '') {
            filterPosts(e.target.value)
        } else {
            clearFilter();
        }
    }
    return (
    <nav className='teal'>
        <div class="nav-wrapper">
        <form>
            <div class="input-field">
              <input ref={text} id="search" type="search" placeholder="Search" required  onChange={onChange}/>
            </div>
          </form>
        </div>
    </nav>
    )
}

          


export default Searchbar