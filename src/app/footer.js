"use client";

import styles from './page.module.css'

export default function Footer() {
  return (
    <section className={styles.footer}>
      <p className={styles.footerContent}>
        Questions? Contact us at{" "}<a href="mailto:artshackcommunity@proton.me">artshackcommunity@proton.me</a>
      </p>
    </section>
  )
}
