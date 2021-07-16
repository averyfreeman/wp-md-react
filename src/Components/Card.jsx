import React from 'react';

export const Head = (props) => {
  return (
    <div className="card-title card-head round-more p-2">
      <p className="display-3" dangerouslySetInnerHTML={{ __html: props.content }}></p>
      {/* <p className="text-start fs-6 m-3">By: {authors[props.author]}</p> */}
    </div>
  );
};

export const Body = (props) => {
  return (
    <div className="card-body card-content round-more p-2 mx-auto">
      <p
        className="fs-5 p-2 img-fluid mx-auto"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></p>
    </div>
  );
};
