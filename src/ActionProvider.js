import React, { Component } from "react";
import axios from 'axios'
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hey there!")
      this.updateChatbotState(greetingMessage)
    }
    submitHandler(e){
        
        console.log(e)
       //  headers: {
       // 'Access-Control-Allow-Origin' : '*'
       //  }
       const options = {
          headers: {
             'Content-Type': 'application/json',
           }
       };
        axios.post('http://ec2-13-232-142-197.ap-south-1.compute.amazonaws.com/signup',this.state,options)
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider