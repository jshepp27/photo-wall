import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./PhotoWall";
import PropTypes from "prop-types";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 0,
          description: "beautiful landscape",
          imageLink:
            "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg",
          selected: true
        },
        {
          id: 1,
          description: "Aliens???",
          imageLink:
            "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
            "08323785_735653395_n.jpg",
          selected: false
        },
        {
          id: 2,
          description: "On a vacation!",
          imageLink:
            "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
          selected: false
        }
      ]
    };

    this.removedPhoto = this.removedPhoto.bind(this);
    console.log("constructor");
  }

  removedPhoto(postRemoved) {
    console.log("Hello u cun!" + postRemoved);
    this.setState(state => ({
      posts: state.posts.filter(posts => posts !== postRemoved)
    }));
  }

  addPhoto = postSubmitted => {
    this.setState(state => ({
      posts: state.posts.concat([postSubmitted])
    }));
    console.log(this.state);
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.posts);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title className="titlez" title={"Zara & Josh"} />
              <Photowall
                handelScreen={this.handelScreen}
                posts={this.state.posts}
                onRemovePhoto={this.removedPhoto}
              />
            </div>
          )}
        />

        <Route
          exact
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto
              onAddPhoto={addedPost => {
                this.addPhoto(addedPost);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default Main;
