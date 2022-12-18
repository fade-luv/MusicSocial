import {rerenderEntireTree} from "./../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, textPost: "Hi,bro", likesCount: 0 },
      { id: 2, textPost: "How, are you", likesCount: 0 },
      { id: 3, textPost: "Thanks", likesCount: 0 },
      { id: 4, textPost: "Goodbye", likesCount: 0 },
    ],
    newPostText: 'it-camasutra.com',
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
};

export function addPost(postMessage) {
  let newPost = {
    id: 5,
    textPost: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export function refreshPostText(newText) {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}
export default state;
