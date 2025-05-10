import Image from 'next/image'
import styles from './page.module.css'

export default function Intro() {
  return <div className={styles.introContainer}>
    <div className={styles.introCopyContainer}>
      <Image src="/hero.png" alt="Save Artshack's Mission" width="620" height="72" className={styles.hero} />
      <p className={styles.quote}>
        “Quote Here about Protecting our<br/>community from harm.” -Author
      </p>
      <p className={styles.introCopy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <ul className={styles.introList}>
        <li><a href="/index">Timeline of Events</a></li>
        <li><a href="/index">Donate to Mutual Aid Fund</a></li>
        <li><a href="/index">Sign Our Petition</a></li>
        <li><a href="/index">Email Mckendree Key & the Board</a></li>
      </ul>
    </div>
    <div className={styles.townHallContainer}>
      <Image src="/TownHall.svg" alt="Town Hall at Church xyz 6:30pm" width="290" height="285" className={styles.townHallGraphic} />
    </div>
  </div>
}
