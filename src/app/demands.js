import styles from './page.module.css'
  const COPY = [
  {
    title: "No restructuring without community input",
    copy: "Including staff firings or dissolving of programs."
  },
  {
    title: "Appoint a diverse and representative board",
    copy: "Artshack Board of Directors should reflect equity, diversity, and inclusion and be active community space members, as stated in its mission."
  },
  {
    title: "Financial transparency",
    copy: "A recent and comprehensive budget and income statement, with explanations for any gaps or anomalies."
  },
  {
    title: "Accountability as an anti-racist organization",
    copy: "Including a public apology to the community, and a detailed plan of how the organization will address the harm caused and prevent future harm."
  }
]

const ListItem = ({ title, copy }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{copy}</p>
    </li>
  );
}

export default function Demands() {
  return (
    <section className={styles.demandsContainer} id="demands">
      <h1 className={styles.sectionTitle}>Our Demands</h1>
      <ul className={styles.demandsList}>
        {COPY.map(({ title, copy }) => <ListItem key={title} title={title} copy={copy} />)}
      </ul>
    </section>
  );
}
