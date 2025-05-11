import Intro from './intro';
import Demands from './demands';
import Petition from './petition';
import CommunityMessages from './communityMessages';
import styles from './page.module.css'

export default function Page() {


    return <div className={styles.container}>
        <div className={styles.containerMainContent}>
            <Intro/>
            <Demands/>
            <Petition/>
        </div>
        <CommunityMessages />
    </div>
}
