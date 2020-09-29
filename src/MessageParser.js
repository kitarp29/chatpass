class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }

    parse(message) {

      const lowerCaseMessage = message.toLowerCase()
      if (lowerCaseMessage=="yes" || lowerCaseMessage=="yeah"|| lowerCaseMessage=="sure"|| lowerCaseMessage=="haa"|| lowerCaseMessage=="bilkul") {
        this.actionProvider.submitHandler(lowerCaseMessage)
        this.actionProvider.greet()
      }
      else if (lowerCaseMessage=="no" || lowerCaseMessage=="nah"|| lowerCaseMessage=="not sure"|| lowerCaseMessage=="n"|| lowerCaseMessage=="katai naa") {
        this.actionProvider.submitHandler(lowerCaseMessage)
        this.actionProvider.thnks()
        
      }
      else if (lowerCaseMessage=="raunak" || lowerCaseMessage=="amisha"|| lowerCaseMessage=="vivek"|| lowerCaseMessage=="pragya"|| lowerCaseMessage=="shoaib" || lowerCaseMessage=="ishika") {
        this.actionProvider.submitHandler(lowerCaseMessage)
        this.actionProvider.frnds()
      }
      else{
        this.actionProvider.wtf()
      }
    }
}
  
  export default MessageParser