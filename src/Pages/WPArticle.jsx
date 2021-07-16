import { useLocation } from 'react-router-dom';

// const Article = ({ content }) => {
const Article = (props) => {
  /* eslint-disable no-unused-vars */
  const location = useLocation();
  const { author, content, date } = location.state;
  console.log(props, author, content, date);
  return (
    <div>
      {/* <div className="d-flex flex-column align-items-center img-fluid p-5 constrain-image"> */}
      <p
        className="fs-5 p-2 img-fluid mx-auto"
        dangerouslySetInnerHTML={{ __html: author }}
      />
      <p
        className="fs-5 p-2 img-fluid mx-auto"
        dangerouslySetInnerHTML={{ __html: date }}
      />
      <p className="fs-5 p-2 mx-auto" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Article;
