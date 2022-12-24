// import { profileReducer } from "./profile-reducer";
// import { dialogsReducer } from "./dialogs-reducer";

// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: 1, textPost: "Hi,bro", likesCount: 0 },
//         { id: 2, textPost: "How, are you", likesCount: 0 },
//         { id: 3, textPost: "Thanks", likesCount: 0 },
//         { id: 4, textPost: "Goodbye", likesCount: 0 },
//       ],
//       newPostText: "it-camasutra.com",
//     },

//     dialogsPage: {
//       dialogs: [
//         { id: 1, name: "Dmitry" },
//         { id: 2, name: "Sergey" },
//         { id: 3, name: "Svetlana" },
//         { id: 4, name: "Ilyaa" },
//       ],

//       messages: [
//         { id: 1, textMessage: "Hi,bro" },
//         { id: 2, textMessage: "How, are you" },
//         { id: 3, textMessage: "Thanks" },
//         { id: 4, textMessage: "Goodbye" },
//       ],
//       newMessageText: "Ваше сообщение",
//     },
//   },

//   _subscriber(observer) {
//     this._rerenderEntireTree = observer;
//   },

//   getState() {
//     return this._state;
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._rerenderEntireTree(this._state);
//   },
// };




// export default store;
// window._store = store;
