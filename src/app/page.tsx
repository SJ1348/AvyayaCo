// pages/index.js

import Head from "next/head";
import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Avyaya - AI Agents</title>
        <meta
          name="description"
          content="Empowering businesses with AI agents that streamline processes, boost engagement, and scale productivity."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>Avyaya</div>
          <ul className={styles.navLinks}>
            <li>Solutions</li>
            <li>How It Works</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Unlock the Power of AI Agents</h1>
          <p className={styles.subtitle}>
            Avyaya empowers businesses with advanced AI agents to streamline
            operations, enhance engagement, and scale growth.
          </p>
          <button className={styles.ctaButton}>Get Started</button>
        </section>

        <section className={styles.features}>
          <h2>Why Choose Avyaya?</h2>
          <div className={styles.featureList}>
            <div className={styles.feature}>
              <h3>Custom AI Agents</h3>
              <p>
                Our team crafts AI solutions tailored to your unique business
                needs, helping you optimize processes and reduce costs.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Scalable and Robust</h3>
              <p>
                Avyaya's AI agents are built to scale, ensuring high performance
                as your business grows.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Easy Integration</h3>
              <p>
                Seamlessly integrate our AI solutions into your existing systems
                with minimal disruption.
              </p>
            </div>
          </div>
        </section>

        {/* Updated How It Works Section */}
        <section className={styles.howItWorks}>
          <h2>How It Works</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>Consultation & Customization</h3>
                <p>
                  Our experts analyze your needs and customize AI solutions
                  tailored to your business goals.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>Integration & Testing</h3>
                <p>
                  Seamlessly integrate AI agents into your existing systems,
                  followed by rigorous testing.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>Optimization & Support</h3>
                <p>
                  We continuously optimize and support our solutions to ensure
                  peak performance.
                </p>
              </div>
            </div>
          </div>
          <p className={styles.howItWorksText}>
            From planning to execution, we are with you every step of the way to
            ensure maximum impact.
          </p>
        </section>

        {/* Updated Contact Section */}
        <section className={styles.contact}>
          <div className={styles.contactBanner}>
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Contact us today to learn more about how Avyaya can help you
              harness the potential of AI agents.
            </p>
            <button className={styles.contactButton}>Contact Us</button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Avyaya Co.</p>
        <p>Made with ❤️ by Manjiri and Sid</p>
      </footer>
    </div>
  );
}
