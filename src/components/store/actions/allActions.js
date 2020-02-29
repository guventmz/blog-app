import axios from "axios";

export const getAllPosts = () => {
  return dispatch => {
    axios.get("http://blog-app-rest.herokuapp.com/api/posts").then(res => {
      return dispatch({ type: "GET_ALL_POSTS", payload: res.data });
    });
  };
};

export const getSinglePost = id => {
  return dispatch => {
    axios.get("http://blog-app-rest.herokuapp.com/api/posts/" + id).then(res => {
      return dispatch({ type: "GET_SINGLE_POST", payload: res.data });
    });
  };
};

export const getPhotos = (page) => {
  return dispatch => {
    axios.get("http://blog-app-rest.herokuapp.com/api/photos/" + page)
    .then(res => {
      return dispatch({ type: "GET_PHOTOS", payload: res.data})
    })
  }
}

export const postContact = (name, email, text) => {
  return dispatch => {
    axios.post("http://blog-app-rest.herokuapp.com/api/contact", {
      name,
      email,
      text
    })
    .then(res => {
      return dispatch({ type: "POST_CONTACT", payload: res.data })
    })
  }
}
