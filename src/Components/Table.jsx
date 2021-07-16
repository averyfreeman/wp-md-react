// import { authors } from 'content/authors';

// export const PostAuthor = ({ children }) => <p className="">By: {authors[author]}</p>;

export const PostExcerpt = ({ content }) => (
  <p className="" dangerouslySetInnerHTML={{ __html: content }}></p>
);

export const PostTitle = ({ content }) => (
  <p className="" dangerouslySetInnerHTML={{ __html: content }}></p>
);
