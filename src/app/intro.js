"use client"

import Image from 'next/image'
import styles from './page.module.css'

export default function Intro() {
  const recipients = "mckendree@artshackbrooklyn.org,beccagreen@gmail.com,jasonshure@gmail.com,nicholasohstudio@gmail.com"
  const emailSubject = "Protect Artshack's Mission!"
  const emailBody = "I stand with the community of Artshack working to protect Artshack’s Mission. We demand:\n" +
      "\n1. No restructuring without community input\nIncluding staff firings or dissolving of programs\n" +
      "\n2. Appoint a diverse and representative board\nArtshack Board of Directors should reflect equity, diversity, and inclusion and be active community space members, as stated in its mission.\n" +
      "\n3. Financial transparency\nA recent and comprehensive budget and income statement, with explanations for any gaps or anomalies.\n" +
      "\n4. Accountability as an anti-racist organization\nIncluding a public apology to the community, and a detailed plan of how the organization will address the harm caused and prevent future harm.\n" +
      "\nSincerely, \nA Committed Artshack Community Member\n"
  const emailTemplate = `mailto:${recipients}?subject=${emailSubject}&body=${encodeURIComponent(emailBody)}`

  return (
      <section className={styles.introContainer}>
        <div className={styles.introCopyContainer}>
          <p className={styles.introCopy}>
            Artshack’s mission is so special, but our leaders are falling short of it. Specifically, Executive Director
            McKendree Key’s actions have failed to meet our commitment to anti-racism, diversity, equity, and inclusion.
            The status quo hurts beloved community members, and disrupts Artshack’s operations as a non-profit in
            service of its BedStuy neighbors. <a href="https://drive.proton.me/urls/3MEX7K3QQR#n8i2yEK86I32">Community members have compiled a
            timeline of recent and relevant events here.</a>
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
            <i>“Artshack Brooklyn is a nonprofit ceramics studio located in Bed-Stuy, Brooklyn. We are an anti-racist, queer-affirming organization that celebrates the creativity of youth and honors people of all abilities.
            We believe in the healing powers of clay!” - Artshack Mission</i>
          </p>
          <h1 className={styles.ctaTitle}>Calls to Action:</h1>
          <ul className={styles.introList}>
            <li><a href="#petition">Sign Our Petition</a></li>
            <li><a id="form"
                   href="https://docs.google.com/forms/d/e/1FAIpQLSc_E2yEf8Vut1CGfx4tQD2mTBAJyVD1e_S5CEcQwbEm-gXIqQ/viewform">Tell
              Us About Your Experience at Artshack</a></li>
            <li><a href="https://opencollective.com/artshack-organizers-mutual-aid">Donate to Mutual Aid Fund</a></li>
            <li><a href={emailTemplate}>Email McKendree Key & the Board</a></li>
            <li><a href="#what-the-mission-means-to-our-community">See What the Mission Means to Our Community</a></li>
          </ul>
        </div>
        <div className={styles.townHallContainer}>
          <Image src="/TownHall.svg" alt="Town Hall at Artshack 6:30pm" width="290" height="285"
                 className={styles.townHallGraphic}/>
        </div>
      </section>
  )
}
