"use client";

import styles from './page.module.css'

export default function Footer() {
  return (
    <section className={styles.footer}>
      <p className={styles.footerContent}>
        Questions? Contact us at{" "}<a href="mailto:artshack.community@proton.me">artshack.community@proton.me</a>
      </p>
    </section>
  )
}
