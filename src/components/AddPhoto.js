import React, { Component } from "react";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const imgLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const posts = {
      id: Number(new Date()),
      imageLink: imgLink,
      description: description,
      selected: false
    };
    if (description && imgLink !== null) {
      this.props.onAddPhoto(posts);
    }
  }

  render() {
    return (
      <div>
        <h1>Photowall</h1>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input
              className=""
              type="text"
              placeholder="Hello cun ... "
              name="link"
            />
            <input
              className=""
              type="text"
              placeholder="Description ... "
              name="description"
            />
            <button className="button">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
