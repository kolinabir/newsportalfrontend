import React from "react";

const SingleNewsDetails = ({ params }) => {
  console.log(params.newsID);
  return (
    <div>
      <h1>Single News Details</h1>
      <p>{params.newsID}</p>
    </div>
  );
};

export default SingleNewsDetails;
