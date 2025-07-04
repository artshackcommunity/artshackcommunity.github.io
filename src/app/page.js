import Image from 'next/image'
import Intro from './intro';
import Demands from './demands';
import Petition from './petition';
import CommunityMessages from './communityMessages';
import Footer from './footer';
import styles from './page.module.css'

export default function Page() {


  return (
    <div className={styles.pageContainer}>
      <Image
          src="/ProtectArtshack.PNG"
            alt="Protect Artshack's Mission"
            className={styles.hero}
            width={1200}
            height={200}
            layout="responsive"/>
      <div className={styles.contentContainer}>
        <Intro/>
        <Demands/>
        <Petition/>
      </div>
      <CommunityMessages />
      <Footer />
  </div>)
}
