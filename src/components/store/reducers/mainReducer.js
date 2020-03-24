const initState = {
    posts: [],
    post: {},
    body: [],
    photos: [],
    modal: null,
    modalBody: [],
    name: null,
    email: null,
    text: null
};

const postsReducer = (state = initState,action) => {
    if(action.type === 'GET_ALL_POSTS'){
        const modal = action.payload.posts[0];
        const modalBody = action.payload.posts[0].body.split("\\n");
        return {
           ...initState,
           posts: action.payload.posts.reverse(),
           modal: modal,
           modalBody,
        }
    }
    if(action.type === "GET_SINGLE_POST"){
        const body = action.payload.post[0].body.split("\\n");
        return {
            ...initState,
            post: action.payload.post[0],
            body: body
        }
    }
    if(action.type === "GET_PHOTOS") {
        return {
            ...initState,
            photos: action.payload
        }
    }
    if(action.type === "POST_CONTACT"){
        return {
            name: action.payload.name,
            email: action.payload.email,
            text: action.payload.text
        }
    }
    return state;
}

export default postsReducer