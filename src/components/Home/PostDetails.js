import React, { Component } from "react";
import { connect } from "react-redux";
import { getSinglePost } from "../store/actions/allActions";
import ReactGA from 'react-ga'

class PostDetails extends Component {

  state = {
    loading: true
  }

  UNSAFE_componentWillMount(){
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  componentDidMount() {
    this.props.getSinglePost(this.props.match.params.postId);
  }

  componentDidUpdate() {
    if(this.state.loading === true) {
      this.setState({
        loading: false
      })
    }
  }

  render() {
    const singlePost = this.props.post;
    const bodyPar = this.props.body.map(par => {
      const key = new Date().valueOf() + Math.random();
      return (
        <p key={key}>{par}</p>
      )
    })
    if(this.state.loading === false) {
      return (
        <div className="post-details">
          <img src="" alt="" />
          <h1 className="card-title red-text">{singlePost.title}</h1>
          {bodyPar}
        </div>
      );
    }else {
      return (
        <div className="lds-dual-ring"></div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    post: state.post,
    body: state.body
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSinglePost: id => {
      dispatch(getSinglePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
