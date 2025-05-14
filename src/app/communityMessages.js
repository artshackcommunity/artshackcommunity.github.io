"use client";

import styles from './page.module.css'
import { useEffect, useState } from "react";
import Image from 'next/image';

const Quote = ({ reason }) => {
  if (!reason) return null
  return <>
    <p>“{reason}“</p>
    <br />
  </>
}

const MessageCard = ({reason, role, name}) => {
  return (
    <li className={styles.messageCard}>
      <div className={styles.messageContent}>
        <Quote reason={reason} />
        <div className={styles.messageCardRole}>
          <Image className={styles.messageImage} src="/A.svg" alt={`${name}'s message`} width="30" height="30" />
          <div>
            <p><strong>{name}</strong></p>
            <p>{role}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

const SignatureCount = ({ count }) => {
  return (
    <p className={styles.countCopy}>
      <strong>{count}</strong> signatures and counting!
    </p>
  );
}

export default function CommunityMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('/messages.json')
        .then(response => response.json())
        .then(data => setMessages(data))
        .catch(error => console.error('Error fetching messages:', error));
  }, []);

  return (
    <section>
      <h1 className={styles.sectionTitle} id="what-the-mission-means-to-our-community">JOIN THE COMMUNITY TAKING A STAND</h1>
      {messages?.length ? <SignatureCount count={messages.length} /> : null}
      <div className={styles.messagesContainer}>
        <ul className={styles.messagesList}>
          {renderMessageCards(messages)}
        </ul>
      </div>
    </section>
  );
}

function renderMessageCards(messages) {
  return messages.map((message, i) => (
      <MessageCard
          key={message.name+i}
          reason={message.reason}
          role={message.role.replaceAll(";", ",")}
          name={message.name}
      />
  ));
}
