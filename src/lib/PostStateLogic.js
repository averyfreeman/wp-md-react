import { Fragment, useEffect, useState } from 'react';
import { Loading } from 'Components/Loading';
import WPPosts from 'Pages/WPPosts';
import { fetchPosts } from 'lib/fetchPosts';

const endpoint = process.env.REACT_APP_WP_VICTIM;
fetchPosts(endpoint);

const PostStateLogic = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem('posts')));
  }, []);

  return (
    <Fragment>
      {!posts && <Loading page="wp posts" />}
      {posts && <WPPosts posts={posts} />}
    </Fragment>
  );
};

export default PostStateLogic;
