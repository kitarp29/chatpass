import React, { Component } from "react";
import axios from 'axios'

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
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

    }
    greet() {
      const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Any';
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {console.log(data, data.setup,data.delivery);
          if(data.setup!==undefined)
          { const greetingMessage = this.createChatBotMessage( data.setup,"\n")
        this.updateChatbotState(greetingMessage);
        const reply=this.createChatBotMessage( data.delivery,"\n")
        this.updateChatbotState(reply);}
        else{
          const greetingMessage = this.createChatBotMessage( data.joke)
        this.updateChatbotState(greetingMessage);
        }
        const yeah = this.createChatBotMessage("Wanna hear more?\n🤣😂")
        this.updateChatbotState(yeah);
      });
     
    }
    
    wtf(){
      const nah = this.createChatBotMessage("Yeah Kya Tutul Putul??\n🤔")
      this.updateChatbotState(nah);
      const yeah = this.createChatBotMessage("Say Yes for Jokes")
        this.updateChatbotState(yeah);
    };
    frnds(){
      const nah = this.createChatBotMessage("😎Aur Beta kaisa lga mera kaam??\nMaja aaya ki nhi??\n\n Nhi aaya toh hum kya kre BC😒\ntmhare lia nhi bnaye h")
      this.updateChatbotState(nah);
    }

    thnks(){
      const nah = this.createChatBotMessage("Thanks for checking my work🤗")
      this.updateChatbotState(nah);
    }
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider