import Intro from './intro';
import Demands from './demands';
import Petition from './petition';
import CommunityMessages from './communityMessages';
import Footer from './footer';
import styles from './page.module.css'

export default function Page() {


  return (
    <div>
      <div className={styles.container}>
        <Intro/>
        <Demands/>
        <Petition/>
      </div>
      <CommunityMessages />
      <Footer />
  </div>)
}
