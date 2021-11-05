import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portal Metal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <div className="container">
      <header className={styles.header}>
        <a href="#home">
          <div  className={styles.log}>
           <h1>PORTAL BANDAS</h1>
           </div>
        </a>
        <div className={styles.banner}>
        <Image
        src="/homemetal/"
        width="1349px"
        height="400px"
        layout="fixed"
       />
       </div>  
       </header>
      </div>
      
      
      <main className={styles.main}>
      
             <section className={styles.content}>
                         <div className={styles.contat}>
          <h2>PROCURE SUA BANDA PREFERIDA </h2>
          <form className={styles.form} method="POST" action="./email.php">
          <input
              className={styles.field}
              name="Nome"
              placeholder="Nome da Banda"></input>
           <input
              className={styles.field}
              name="estilo"
              placeholder="Estilo"></input>
            <input type="submit" value="Procurar"></input>
          </form>
        </div>
      
        

        {/* <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p> */}
         
  
          <div className={styles.contat}>
          <h2>ANUNCIE SUA BANDA CONOSCO </h2>
            <form className={styles.form} method="POST" action="./email.php">
            <input
              className={styles.field}
              name="Nome"
              placeholder="Nome da Banda"></input>
            <input
              className={styles.field}
              name="email"
              placeholder="E-mail"></input>
             <input type="submit" value="Enviar"></input><br></br>
            
          </form>
    
</div>
</section>

<h1 className={styles.parceiros}>BANDAS PARCEIRAS</h1>

        <div className={styles.grid}>
          <Link href="/band/urso">
            <a className={styles.card}>
            <img src="/homemetal/capasite.jpg" alt="foto urso"></img>
            </a>
          </Link>
          <Link href="/band/almanegra">
            <a className={styles.card}>
            <img src="/homemetal/alma.jpg" alt="foto urso"></img>
            </a>
          </Link>
          <Link href="/band/slammer">
            <a className={styles.card}>
            <img src="/homemetal/slammer.jpg" alt="foto urso"></img>
            </a>
          </Link>
          

          {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
        <section className={styles.content}>
        <div className={styles.cadastro}>
          <h2>CADASTRE SUA BANDA </h2>
          <form className={styles.form} method="POST" action="./email.php">
            <input
              className={styles.field}
              name="Nome"
              placeholder="Nome da Banda"></input>
            <input
              className={styles.field}
              name="email"
              placeholder="E-mail"></input>
            <textarea
              className={styles.field}
              name="mesage"
              placeholder="Realese e Redes Sociais"></textarea>
              <h3>ADD FOTOS</h3>
               <input type="file" id="flimage" name="flimage" accept="image*/"></input><br></br>
            <input type="submit" value="Enviar"></input><br></br>
            
          </form>
        </div>
      </section>
      </main>

       <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          PORTAL METAL DIREITOS RESERVADOS{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> 
    </div>
  );
}
