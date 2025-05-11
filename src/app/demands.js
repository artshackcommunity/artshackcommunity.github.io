import styles from './page.module.css'

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
    <section className={styles.demandsContainer}>
      <h1 className={styles.sectionTitle}>Our Demands</h1>
      <ul className={styles.demandsList}>
        <ListItem title="Demand" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
        <ListItem title="Demand" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
        <ListItem title="Demand" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
        <ListItem title="Demand" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
        <ListItem title="Demand" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
        <ListItem title="Demand" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
      </ul>
    </section>
  );
}
