import Intro from './intro';
import Demands from './demands';
import Petition from './petition';
import Signatures from './signatures';
import styles from './page.module.css'

export default function Page() {


    return <div className={styles.container}>
        <Intro/>
        <Demands/>
        <Petition/>
        <Signatures />
    </div>
}
