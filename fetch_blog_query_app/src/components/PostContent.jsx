import React from "react";
import PropTypes from "prop-types";

const PostContent = React.memo(({ content }) => {
  return (
    <div>
      {content ? (
        <>
          <h2>{content.title}</h2>
          <p>{content.body}</p>
        </>
      ) : (
        <>
          <h2>Select a post</h2>
        </>
      )}
    </div>
  );
});

PostContent.displayName = "PostContent";

//Array Manipulation and Data Rendering
//Task 1 Color List


PostContent.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default PostContent;
