"use client";

import styles from './page.module.css'
import {useEffect, useState} from "react";

const MessageCard = ({reason, role, name}) => {
  return (
      <li className={styles.messageCard}>
        <div className={styles.messageContent}>
          <p>{reason}</p>
          <br/>
          <p><strong>{name}</strong></p>
          <p>{role}</p>
        </div>
      </li>
  );
}

export default function CommunityMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('/signatures.json')
        .then(response => response.json())
        .then(data => setMessages(data))
        .catch(error => console.error('Error fetching messages:', error));
  });

  return (
    <div>
      <h1 className={styles.sectionTitle}>JOIN THE COMMUNITY TAKING A STAND</h1>
      <div className={styles.messagesContainer}>
        <ul className={styles.messagesList}>
          {renderMessageCards(messages)}
        </ul>
      </div>
    </div>
  );
}

function renderMessageCards(message) {
  return message.map((signature) => (
      <MessageCard
          key={signature.name}
          reason={signature.reason}
          role={signature.role.replace(";", ",")}
          name={signature.name}
      />
  ));
}
