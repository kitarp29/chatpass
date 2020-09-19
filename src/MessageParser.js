
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }


    
  
    parse(message) {

      const lowerCaseMessage = message.toLowerCase()
      if (lowerCaseMessage!=="") {
        this.actionProvider.greet()
        this.actionProvider.submitHandler(lowerCaseMessage)
      }
    }
}
  
  export default MessageParser