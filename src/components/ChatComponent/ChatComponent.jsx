// Chat.js

import React, {useState} from "react";
import styles from "./Chat.module.css";
import {IoCloseCircleOutline} from "react-icons/io5";
import logo from "../../img/Logo.png";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleKeyDownEnter = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      setNewMessage("");
      setMessages([...messages, {text: newMessage, sender: "user"}]);
      setMessages((prevMessages) => [
        ...prevMessages,
        {text: "...", sender: "loading"},
      ]);
      let data = {
        chat_context: messages,
        prompt: newMessage,
      };
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      let response = await fetch(
        import.meta.env.VITE_CRUXY_CHAT,
        options
      );

      if (response.status == 200) {
        setMessages((prevMessages) =>
          prevMessages.filter((message) => message.sender !== "loading")
        );
        let data = await response.json();;
        setMessages((prevMessages) => [
          ...prevMessages,
          {text: data.response, sender: "chatbot"},
        ]);
        let chatContainer = document.getElementById("messages-container");
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  };

  return (
    <div id='chatbot-container' className={styles.chatContainer}>
      <div className={`${styles.chatHeader}`}>
        <img className={`${styles.holoLogo}`} src={logo} alt='Holocruxe' />
        <IoCloseCircleOutline
          onClick={() => {
            let chatIcon = document.getElementById("chat-bot-icon");
            let chatContainer = document.getElementById("chatbot-container");
            if (chatContainer) {
              chatContainer.style.display = "none";
              chatIcon.style.display = "block";
            }
          }}
          className={`${styles.closeIcon}`}
          size={"27px"}
        />
      </div>
      <div id='messages-container' className={styles.chatMessages}>
        <div key={"first-message"} className={styles.message}>
          <div className={styles.botMessage}>
            ¡Hola, Bienvenido a Holocruxe!
          </div>
        </div>
        {messages.map((message, index) => (
          <div key={index} className={styles.message}>
            {message.sender === "user" ? (
              <div className={styles.userMessage}>{message.text}</div>
            ) : message.sender === "loading" ? (
              <div className={styles.typing}>{message.text}</div>
            ) : (
              <div className={styles.botMessage}>{message.text}</div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type='text'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDownEnter}
          placeholder='Escribe un mensaje...'
          className={styles.input}
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
