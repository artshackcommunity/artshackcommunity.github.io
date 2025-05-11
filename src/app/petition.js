import styles from './page.module.css'

export default function Petition() {
  return (
    <section className={styles.petitionContainer}>
      <h1 className={styles.sectionTitle} id="petition">Sign our Petition</h1>
      <div className={styles.petitionContent}>
        <iframe id="JotFormIFrame-251286346098162" title="Save Artshack's Mission"
          allowtransparency="true" allow="fullscreen" allowFullScreen
          src="https://form.jotform.com/251286346098162" frameBorder="0"
          className={styles.jotformIframe}
          scrolling="yes">
        </iframe>
        <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js' async></script>
        {/* <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-251286346098162']", "https://form.jotform.com/")</script> */}
      </div>
    </section>
  );
}