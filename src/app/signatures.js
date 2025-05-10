"use client";

import styles from './page.module.css'
import {useEffect, useState} from "react";

export default function Signatures() {
  const [signatures, setSignatures] = useState([]);

  useEffect(() => {
    fetch('/signatures.json')
        .then(response => response.json())
        .then(data => setSignatures(data))
        .catch(error => console.error('Error fetching signatures:', error));
  });

  return (
      <div className={styles.signaturesContainer}>
        <h1 className={styles.sectionTitle}>Join the community<br/>taking a stand</h1>
        <table className={styles.signaturesTable}>
          <thead>
          <tr>
            <th><strong>Name</strong></th>
            <th><strong>Relationship to Artshack</strong></th>
            <th><strong>Why is Artshack’s mission important to you?</strong></th>
          </tr>
          </thead>
          <tbody>{renderSignatures(signatures)}</tbody>
        </table>
      </div>
  );
}

function renderSignatures(signatures) {
  return signatures.map((signature) => (
      <tr key={signature.name}>
        <td>{signature.name}</td>
        <td>{signature.relationship}</td>
        <td>{signature.reason}</td>
      </tr>
  ));
}
