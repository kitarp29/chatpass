import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "Joker",
  initialMessages: [createChatBotMessage("Want to listen to some Jokes??")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#008ad3",
    },
    chatButton: {
      backgroundColor: "#008ad3",
    },
  },
}

export default config