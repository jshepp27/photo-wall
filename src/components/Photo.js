import React from "react";
import PropTypes from "prop-types";

function Photo(props) {
  const posts = props.posts;
  return (
    <figure className="figure">
      <img className="photo" src={posts.imageLink} alt={posts.description} />
      <figcaption>
        <p className="caption">{posts.description}</p>
        <div className="button-container">
          <button
            onClick={() => {
              props.onRemovePhoto(posts);
            }}
          >
            Remove
          </button>
        </div>
      </figcaption>
    </figure>
  );
}

Photo.propTypes = {
  posts: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
};

export default Photo;
