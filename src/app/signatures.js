import styles from './page.module.css'

export default function Signatures() {
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
        <tbody>
          <tr>
            <td>Binta Coulibaly</td>
            <td>Teacher, Working Member</td>
            <td>Artshack is meant to be a safe space for the community. Its current leadership is forcing it to be a white supremacist, gentrifying force in the neighborhood.</td>
          </tr>
          <tr>
            <td>Binta Coulibaly</td>
            <td>Teacher, Working Member</td>
            <td>Artshack is meant to be a safe space for the community. Its current leadership is forcing it to be a white supremacist, gentrifying force in the neighborhood.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
