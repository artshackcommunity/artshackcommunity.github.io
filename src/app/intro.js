import Image from 'next/image'
import styles from './page.module.css'

export default function Intro() {
  const emailSubject = "Protect Artshack's Mission!"
  const emailBody = "I'm part of the community and I want you to be restructured to better reflect the wants and needs of the community."
  const emailTemplate = `mailto:recipient@example.com?subject=${emailSubject}&body=${emailBody}`

  return (
      <section className={styles.introContainer}>
        <div className={styles.introCopyContainer}>
          <Image src="/hero.png" alt="Protect Artshack's Mission" width="620" height="72" className={styles.hero}/>
          <p className={styles.introCopy}>
            Artshack’s mission is so special, but our leaders are falling short of it. Specifically, Executive Director
            McKendree Key’s actions have failed to meet our commitment to anti-racism, diversity, equity, and inclusion.
            The status quo hurts beloved community members, and disrupts Artshack’s operations as a non-profit in
            service of its BedStuy neighbors. <a href="https://www.google.com">Community members have compiled a timeline of recent and relevant events here.</a>
            <br/><br/>
            Despite concerned community members’ requests to meet collectively with the director and the board
            to address it, no concessions have been made to engage in open, restorative dialogue between all parties.
            Furthermore, the director escalated their efforts to silence staff involved. We also have reason
            to believe the director is engaging in punitive efforts to restructure the organization to avoid
            accountability.
            <br/><br/>
            But we will not be silenced! <a href="#demands">Click here to see our demands.</a>
          </p>
          <p className={styles.mission}>
            “Artshack Brooklyn is a nonprofit ceramics studio located in Bed-Stuy, Brooklyn. We are an anti-racist, queer-affirming organization that celebrates the creativity of youth and honors people of all abilities.
            We believe in the healing powers of clay!” - Artshack Mission
          </p>
          <ul className={styles.introList}>
            <li><a id="form"
                href="https://docs.google.com/forms/d/e/1FAIpQLSc_E2yEf8Vut1CGfx4tQD2mTBAJyVD1e_S5CEcQwbEm-gXIqQ/viewform">Tell
              Us About Your Artshack Experience</a></li>
            <li><a href="https://opencollective.com/artshack-organizers-mutual-aid">Donate to Mutual Aid Fund</a></li>
            <li><a href="#petition">Sign Our Petition</a></li>
            <li><a href={emailTemplate}>Email McKendree Key & the Board</a></li>
            <li><a href="#what-the-mission-means-to-our-community">What the Mission Means to Our Community</a></li>
          </ul>
        </div>
        <div className={styles.townHallContainer}>
          <Image src="/TownHall.svg" alt="Town Hall at Church xyz 6:30pm" width="290" height="285"
                 className={styles.townHallGraphic}/>
        </div>
      </section>
  )
}
