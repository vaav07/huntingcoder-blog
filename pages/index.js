import Head from "next/head";
// import Image from "next/image";
// import Script from 'next/script'

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="keywords"
          content="nextjs, huntingcoder blog, hunting coder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.imageWrapper}>
          {/* <Image
            className={styles.myImg}
            src="/homeimg.jpg"
            alt=""
            width={192}
            height={128}
          /> */}

          <img
            src="/homeimg.jpg"
            alt="hunting coder"
            className={styles.myImg}
            width={192}
            height={128}
          />
        </div>
        <h1 className={styles.title}>
          <span className="dummy">&lt;HuntingCoder/&gt;</span>
        </h1>

        <div className={styles.container}>
          <h2 className={styles.h2}>Latest blogs</h2>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022</h3>
            <p>JavaScript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022</h3>
            <p className={styles.p}>
              JavaScript is the language used to design logic for the web
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2022</h3>
            <p className={styles.p}>
              JavaScript is the language used to design logic for the web
            </p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
