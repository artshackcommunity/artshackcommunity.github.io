"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

const QUOTES = [
  {
    text: "Early in life, I learned that if you want something, you better make some noise.",
    author: "Malcolm X"
  },
  {
    text: "There is no power for change greater than a community discovering what it cares about.",
    author: "Margaret J. Wheatley"
  },
  {
    text: "The greatness of a community is most accurately measured by the compassionate actions of its members.",
    author: "Coretta Scott King"
  }
];


const Quote = ({ author, text}) => {

  return (
    <p className={styles.quote}>
      <i>“{text}“</i> <br />
      <strong>– {author}</strong>
    </p>
  )
}

export default function Intro() {
  const emailSubject = "Save Artshack's Mission!"
  const emailBody = "I'm part of the community and I want you to be restructured to better reflect the wants and needs of the community."
  const emailTemplate = `mailto:recipient@example.com?subject=${emailSubject}&body=${emailBody}`

  const [quote, setQuote] = useState(QUOTES[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote((prevQuote) => {
        const currentIndex = QUOTES.indexOf(prevQuote);
        const nextIndex = (currentIndex + 1) % QUOTES.length;
        return QUOTES[nextIndex];
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.introContainer}>
      <div className={styles.introCopyContainer}>
        <Image src="/hero.png" alt="Save Artshack's Mission" width="620" height="72" className={styles.hero} />
        <Quote author={quote.author} text={quote.text} />
        <p className={styles.introCopy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul className={styles.introList}>
          <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSc_E2yEf8Vut1CGfx4tQD2mTBAJyVD1e_S5CEcQwbEm-gXIqQ/viewform">Tell Us About Your Artshack Experience</a></li>
          <li><a href="https://opencollective.com/artshack-organizers-mutual-aid">Donate to Mutual Aid Fund</a></li>
          <li><a href="#petition">Sign Our Petition</a></li>
          <li><a href={emailTemplate}>Email McKendree Key & the Board</a></li>
          <li><a href="#what-the-mission-means-to-our-community">What the Mission Means to Our Community</a></li>
        </ul>
      </div>
      <div className={styles.townHallContainer}>
        <Image src="/TownHall.svg" alt="Town Hall at Church xyz 6:30pm" width="290" height="285" className={styles.townHallGraphic} />
      </div>
    </section>
  )
}
