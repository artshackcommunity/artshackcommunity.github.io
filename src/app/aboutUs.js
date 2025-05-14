"use client"

import styles from './page.module.css'
import {useEffect, useState} from "react";

export default function AboutUs() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch('/names.json')
        .then(response => response.json())
        .then(data => setNames(data))
        .catch(error => console.error('Error fetching names:', error));
  }, []);

  function renderNames() {
    return names.map((person, i) => (
            <p key={person.name}>{person.name} ({person.pronouns})<br/></p>
        )
    );
  }

  return (
      <section className={styles.introContainer}>
        <div className={styles.introCopyContainer}>
          <p className={styles.introCopy}>
            We are a group of 50+ members, students, staff, teachers, and BedStuy residents who have built a collective
            memory that unveils the broken link between Artshack's mission, and its executive leadership.
            While not all of us can put our names here for fear of retaliation, below are several folks that make up the
            ever growing, ever strengthening crew who call ourselves Artshack Community.<br/><br/>

            {renderNames()}
          </p>
        </div>
      </section>
  )
}
