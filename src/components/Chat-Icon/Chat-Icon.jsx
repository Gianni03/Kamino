import styles from "./Chat-Icon.module.css";

const ChatBotIcon = () => {
  return (
    <div
      onClick={() => {
        let chatIcon = document.getElementById("chat-bot-icon");
        let chatContainer = document.getElementById("chatbot-container");
        if (chatContainer) {
          chatContainer.style.display = "block";
          chatIcon.style.display = "none";
        }
      }}
      id='chat-bot-icon'
      className={styles.chatBotIcon}
    >
      <img
        src="/images/chatbot-icon.webp"
        alt="ChatBot Icon"
        className={styles.chatBotImage}
      />
    </div>
  );
};

export default ChatBotIcon;
