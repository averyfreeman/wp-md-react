import { Link } from 'react-router-dom';
// import Article from 'Pages/WPArticle';
import { PostTitle, PostExcerpt } from 'Components/Table';

const WPPosts = ({ posts }) => {
  return (
    <section>
      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <caption className="p-3">{posts.length} total posts retrieved</caption>
          <thead className="">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Excerpt</th>
            </tr>
          </thead>
          <tbody className="">
            {posts.map((post, idx) => (
              <tr key={post.id} className="table-striped">
                <th scope="row">
                  {console.log(post)}
                  <Link
                    to={{
                      pathname: `/articles/${post.slug}`,
                      state: {
                        content: post.content.rendered,
                        date: post.date,
                        title: post.title,
                      },
                    }}
                  >
                    {idx + 1}
                  </Link>
                </th>
                <td>
                  <PostTitle content={post.title.rendered} />
                </td>
                <td>
                  <PostExcerpt content={post.excerpt.rendered} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default WPPosts;
