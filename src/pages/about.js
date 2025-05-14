import styles from "@/app/page.module.css";
import Image from "next/image";
import Footer from "@/app/footer";
import AboutUs from "@/app/aboutUs";
import '../app/globals.css';

export default function About() {
  return (
      <div className={styles.pageContainer}>
        <Image
            src="/ProtectArtshack.PNG"
            alt="Protect Artshack"
            className={styles.hero}
            width="1200"
            height="200"/>
        <div className={styles.contentContainer}>
          <AboutUs/>
          <Footer/>
        </div>
      </div>
  )
}