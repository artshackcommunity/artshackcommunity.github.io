"use client";

import styles from './page.module.css'
import {useEffect, useState} from "react";

const MessageCard = ({reason, role, name}) => {
  return (
      <li>
        <div className={styles.messagesEmptiness}></div>
        <div className={styles.messagesContent}>
          <span>{reason}</span>
          {/*<br />*/}
          {/*<h5>{name}</h5>*/}
          {/*<h4>{role}</h4>*/}
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
      <div className={styles.signaturesContainer}>
        <h1 className={styles.sectionTitle}>JOIN THE COMMUNITY TAKING A STAND</h1>
        <ul className={styles.messages}>
          {renderMessageCards(messages)}
        </ul>
      </div>
  );
}

function renderMessageCards(message) {
  return message.map((signature) => (
      <MessageCard
          key={signature.name}
          reason={signature.reason}
          role={signature.role}
          name={signature.name}
      />
  ));
}
