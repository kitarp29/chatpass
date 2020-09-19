import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "Mapie",
  initialMessages: [createChatBotMessage("Hi! How Can I help you? ")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config