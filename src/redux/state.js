let store = {
  
  _state: {
    profilePage: {
      posts: [
        { id: 1, textPost: "Hi,bro", likesCount: 0 },
        { id: 2, textPost: "How, are you", likesCount: 0 },
        { id: 3, textPost: "Thanks", likesCount: 0 },
        { id: 4, textPost: "Goodbye", likesCount: 0 },
      ],
      newPostText: "it-camasutra.com",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dmitry" },
        { id: 2, name: "Sergey" },
        { id: 3, name: "Svetlana" },
        { id: 4, name: "Ilyaa" },
      ],

      messages: [
        { id: 1, textMessage: "Hi,bro" },
        { id: 2, textMessage: "How, are you" },
        { id: 3, textMessage: "Thanks" },
        { id: 4, textMessage: "Goodbye" },
      ],
    },
  },
  _subscriber(observer) {
    this._rerenderEntireTree = observer;
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        textPost: action.postMessage,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = " ";
      this._rerenderEntireTree(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    }
  },
};


export let addPostActionCreator = PostText => ({
  type: "ADD-POST",
  postMessage: PostText,
});


export let onPostChangeActionCreator = text => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: text,
});


export default store;
window._store = store;
