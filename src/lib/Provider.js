// import { useEffect, useState } from 'react';
// import { Context } from 'lib/context';
// import { fetchPosts } from 'lib/crudops';
// import { WP_POSTS as endpoint } from 'lib/constants';

// const Provider = ({ children }) => {
//   const [posts, setPosts] = useState(null);

//   useEffect(() => {
//     fetchPosts(setPosts, endpoint);
//   }, []);

//   const { Provider } = Context;

//   return <Provider posts={posts}>{children}</Provider>;
// };

// export default Provider;
