import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PhotoWall(props) {
  return (
    <div>
      <Link className="add-icon" to={"/AddPhoto"} />
      <div className="photo-grid">
        {props.posts
          .sort(function(x, y) {
            return y.id - x.id;
          })
          .map((posts, index) => (
            <Photo
              key={index}
              posts={posts}
              onRemovePhoto={props.onRemovePhoto}
            />
          ))}
      </div>
    </div>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
};

export default PhotoWall;

// handleRemove() {
//   const removedImg = this.props.posts.filter(
//     i => this.props.posts.selected == true
//   );
//   console.log(removedImg);
//   return removedImg;
// }
