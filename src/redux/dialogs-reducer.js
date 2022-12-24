let initialState = {
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
    newMessageText: "Ваше сообщение",
  }


export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-TEXT":
      state.newMessageText = action.body;
      return state;
    case "SEND-NEW-MESSAGE":
      state.newMessageText = action.newText;
      let body = state.newMessageText;
      state.newMessageText = " ";
      state.messages.push({ id: 6, textMessage: body });
      return state;
    default:
      return state;
  }
};



export let updateNewMessageCreator = (text) => ({
  type: "UPDATE-NEW-MESSAGE-TEXT",
  newText: text,
});
export let sendNewMessageCreator = (text) => ({
  type: "SEND-NEW-MESSAGE",
  newText: text,
});