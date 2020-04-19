import React from "react";
import ReactModal from "react-modal";
import { withCookies } from 'react-cookie';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { getAllPosts } from "../store/actions/allActions";
import { customStyles } from './customStyles';
import ReactGA from 'react-ga';
import uuid from 'react-uuid';


class Posts extends React.Component {
  state = {
    loading: true,
  }

  UNSAFE_componentWillMount(){
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname)
  }

  componentDidMount() {
    this.props.getAllPosts(this.props.match.params.page2);
  }

  UNSAFE_componentWillUpdate() {
    if(this.state.loading === true){
      this.setState({
        loading: false
      })
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.location !== prevProps.location){
        this.props.getAllPosts(this.props.match.params.page2);
    }
  }

  closeModal = () => {
    this.props.cookies.set("modalIsOpen", false, {path: "/"})
  }


  handleClick = e => {
    this.props.history.push("/posts/" + e.target.id);
  };

  handleClickNext = (e) => {
    e.preventDefault();
    let num = parseInt(this.props.match.params.page2);
    if(num < 4){
        num += 1;
        num.toString();
        this.props.history.push("/page/" + num);
        this.setState({
            loading: true
        })
    }
  }

  handleClickPrev = (e) => {
    e.preventDefault();
    let num = parseInt(this.props.match.params.page2);
    if(num>1){
        num -= 1;
        num.toString();
        this.props.history.push("/page/" + num);
        this.setState({
            loading: true
        })
    }
  }

  render() {
    const posts = this.props.posts;
    const postList = posts.map(post => {
      //paragraph mapping
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
              className="posts-btn"
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
      //modal return
      const modalBodyPar = this.props.modalBody.map(par => {
        return (
          <p key={uuid()} className="modal-par">{par}</p>
        )
      })
      // actual rendering
      return (
        <div className="posts">
          <ReactModal ariaHideApp={false} isOpen={(this.props.allCookies.modalIsOpen === undefined)} style={customStyles}>
            <h1 className="card-title modal-card-title">{this.props.modal.title}</h1>
            {modalBodyPar}
            <button onClick={this.closeModal} className="modal-button">Close</button>
          </ReactModal>
          <img
            className="socrates"
            src="/images/posts-socrates-min.png"
            alt=""
          />
          <h1 className="card-title" style={{paddingTop: 50, paddingBottom: 50}}>Latest Posts</h1>
          {postList}
          <div className="btn-container">
            <button className="btn-previous" onClick={this.handleClickPrev}>PREVIOUS</button>
            <button className="btn-next" onClick={this.handleClickNext}>NEXT</button>
          </div>
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
    getAllPosts: (page2) => {
      dispatch(getAllPosts(page2));
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
