import React, { useState, useContext, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import PostContext from "../../context/post/postContext";

const PostForm = () => {
  const postContext = useContext(PostContext);

  const { addPost, current, clearCurrent, updatePost } = postContext;

  useEffect(
    () => {
      if (current !== null) {
        setPost(current);
      } else {
        setPost({
          tag: "",
          content: "",
        });
      }
    },
    [postContext, current]
  );

  const [post, setPost] = useState({
    tag: "",
    content: "",
  });

  const { tag, content } = post;

  const onChange = e => setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addPost(post);
    } else {
      updatePost(post);
    }
    setPost({
      tag: "",
      content: "",
    });
  };

  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h4 className="text">
        {current ? "Edit Post" : "Write Post"}
      </h4>
      <input
        type="text"
        placeholder="Todays Tag"
        name="tag"
        value={tag}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="What's your take on today's tag"
        name="content"
        value={content}
        onChange={onChange}
        required
      />
      <div>
        <input
          type="submit"
          value={current ? "Save Post" : "Create Post"}
          className="btn btn-block"
        />
      </div>
      {current &&
        <div>
          <button className="btn  btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>}
    </form>
  );
};

export default PostForm;
