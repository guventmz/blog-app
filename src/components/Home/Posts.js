import React from "react";
import ReactModal from "react-modal";
import { withCookies } from 'react-cookie';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { getAllPosts } from "../store/actions/allActions";
import { customStyles } from './customStyles';



class Posts extends React.Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    this.props.getAllPosts();
  }

  componentDidUpdate() {
    if(this.state.loading === true){
      this.setState({
        loading: false
      })
    }
  }

  closeModal = () => {
    this.props.cookies.set("modalIsOpen", false, {path: "/"})
  }


  handleClick = e => {
    this.props.history.push("/posts/" + e.target.id);
  };

  
  render() {
    const posts = this.props.posts;
    const postList = posts.map(post => {
      const body = post.body.split("\\n").join("");
      return (
        <div key={post.id} className="post">
          <img
            className="crown-1"
            src="/images/posts-corner.png"
            alt=""
          />
          <span className="card-title red-text ">{post.title}</span>
          <p className="body truncate">
            <br />
            {body}
          </p>
          <div className="button">
            <br />
            <button
              id={post.id}
              className="btn grey darken-3"
              onClick={this.handleClick}
            >
              See More
            </button>
          </div>
        </div>
      );
    });
    if(this.state.loading){
      return (
        <div className="posts">
          <div className="lds-dual-ring"></div>
        </div>   
      )
    }else {
      const modalBodyPar = this.props.modalBody.map(par => {
        return (
          <p key={Math.random()*10000} className="modal-par">{par}</p>
        )
      })
      return (
        <div className="posts">
        <ReactModal isOpen={(this.props.allCookies.modalIsOpen === undefined)} style={customStyles}>
            <h1 className="card-title modal-card-title">{this.props.modal.title}</h1>
            {modalBodyPar}
            <button onClick={this.closeModal} className="modal-button">Close</button>
          </ReactModal>
          <img
            className="socrates"
            src="/images/posts-socrates.png"
            alt=""
          />
          <h1 className="card-title" style={{paddingTop: 50, paddingBottom: 50}}>Latest Posts</h1>
          {postList}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    modal: state.modal,
    modalBody: state.modalBody
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllPosts: () => {
      dispatch(getAllPosts());
    }
  };
};

export default compose(
  withCookies,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Posts);
