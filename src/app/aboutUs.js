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
            <>
              <h3 key={person.name}>{person.name} ({person.pronouns})</h3>
              <p>{person.role} for {person.years} years</p>
            </>
        )
    );
  }

  return (
      <section className={styles.introContainer}>
        <div className={styles.introCopyContainer}>
          <p className={styles.introCopy}>
            We are not anonymous! We are real people! These are our names:<br/>
            {renderNames() }
          </p>
        </div>
      </section>
  )
}
