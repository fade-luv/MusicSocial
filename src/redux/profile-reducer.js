let initialState = {
      posts: [
        { id: 1, textPost: "Hi,bro", likesCount: 0 },
        { id: 2, textPost: "How, are you", likesCount: 0 },
        { id: 3, textPost: "Thanks", likesCount: 0 },
        { id: 4, textPost: "Goodbye", likesCount: 0 },
      ],
      newPostText: "it-camasutra.com",

}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: 5,
        textPost: action.postMessage,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = " ";
      return state;
    case "UPDATE-NEW-POST-TEXT":
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};



export let addPostActionCreator = (PostText) => ({
  type: "ADD-POST",
  postMessage: PostText,
});

export let onPostChangeActionCreator = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: text,
});
