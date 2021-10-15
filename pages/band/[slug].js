import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Band.module.css";

export default function Band({ slug }) {
  return (
    <div className="container">
      <header className={styles.header}>
        <a href="#home">
          <img
            className={styles.log}
            src={`/${slug}/logoyoutube.png`}
            alt="logo"></img>
        </a>
        <nav>
          <ul className={styles.menu}>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#profile">MÚSICOS</a>
            </li>
            <li>
              <a href="#downloads">DOWNLOADS</a>
            </li>
            <li>
              <a href="#agenda">AGENDA</a>
            </li>
            <li>
              <a href="#content">CONTATO</a>
            </li>
          </ul>
        </nav>
      </header>
      <img
        className={styles.cabeca}
        src={`/${slug}/urso.gif`}
        alt="foto da banda"></img>

      <article className={styles.conteudo}>
        <h1>U.R.S.O - ( UNION RESISTENSE SATÂNIC ORGY )</h1>
        <p className={styles.article}>
          Site Oficial do projeto U.R.S.O ( Union Resistence Satanic Orgy ),
          divulgando agenda de shows, venda de produtos oficiais e postagem de
          fotos. U.R.S.O é formado por antigos músicos do Heavy Metal de
          Curitiba, começando com Eduardo Urso (slammer) nos vocais, Caos (Thou
          Shall Not) guitarra solo, Tiagonha (Alma Negra) guitarra solo, Zema (
          slammer ) no Baixo e Búfalo ( Over12 ) na bateria. Seu 1° Álbum esta
          marcado para final do 2° semestre de 2021.Buscando Inspiração nos
          antigos donos de nossa TERRA MÃE BRASIL os indígenas, o álbum debut
          conta a incrível historia que nois foi omitida nas escolas em nosso
          país, o como foi travada a guerra entre Índios e Portugueses, com
          capturas de ambos os lados e seus rituais de canibalismo
          característicos desta época passada. O álbum conta com 10 musicas
          compostas e produzidas pela própria banda, áudios, mixagem e
          masterização realizados por OGAIT ASHTAR - Kafofo Studio em
          Curitiba-pr.
        </p>
      </article>

      <section className={styles.musicos}>
        <h2>MÚSICOS</h2>
        <div className={styles.profile}>
          <div>
            <img src={`/${slug}/ursoperfil.jpg`} alt="foto urso"></img>
            <p>Eduardo Urso</p>
            <p>
              Vocalista da velha guarda do Metal Curitibano, Eduardo Urso vem
              destacando-se no cénario Brasileiro a frente da renomada banda de
              Metal Velóz SLAMMER, Com apresentações nos maiores festivais do
              Brasil e na América Latina.
            </p>
            <a href="http://www.facebook.com">Saiba mais...</a>
          </div>

          <div>
            <img src={`/${slug}/tiagoperfil.jpg`} alt="foto tiago"></img>
            <p>Tiagonha</p>
            <p>
              Guitarrista ativo em diversas bandas da cena autoral e cover de
              curitiba, como ALMA NEGRA, SEM FUTURO E OUTRAS Tiagonha vem sendo
              destaque além de participar como músico também aventura-se na
              produção musical assinando alguns albuns como o destaque U.R.S.O
              em uma produção temática.
            </p>
            <a href="http://www.facebook.com">Saiba mais...</a>
          </div>

          <div>
            <img src={`/${slug}/caosperfil.jpg`} alt="foto caos"></img>
            <p>Eduardo Urso</p>
            <p>
              Vocalista da velha guarda do Metal Curitibano, Eduardo Urso vem
              destacando-se no cénario Brasileiro a frente da renomada banda de
              Metal Velóz SLAMMER, Com apresentações nos maiores festivais do
              Brasil e na América Latina.
            </p>
            <a href="http://www.facebook.com">Saiba mais...</a>
          </div>

          <div>
            <img src={`/${slug}/bufaloperfil.jpg`} alt="foto bufalo"></img>
            <p>Eduardo Urso</p>
            <p>
              Vocalista da velha guarda do Metal Curitibano, Eduardo Urso vem
              destacando-se no cénario Brasileiro a frente da renomada banda de
              Metal Velóz SLAMMER, Com apresentações nos maiores festivais do
              Brasil e na América Latina.
            </p>
            <a href="http://www.facebook.com">Saiba mais...</a>
          </div>

          <div>
            <img src={`/${slug}/zeperfil.jpg`} alt="foto zema"></img>
            <p>Eduardo Urso</p>
            <p>
              Vocalista da velha guarda do Metal Curitibano, Eduardo Urso vem
              destacando-se no cénario Brasileiro a frente da renomada banda de
              Metal Velóz SLAMMER, Com apresentações nos maiores festivais do
              Brasil e na América Latina.
            </p>
            <a href="http://www.facebook.com">Saiba mais...</a>
          </div>
        </div>
      </section>

      <section className={styles.downloads}>
        <h2>Vídeos</h2>
        <div className={styles.download}>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nHDWsnGTRqA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>

          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_SIGQqMZfbc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
      </section>
      {/* <section className={styles.downloads}>
        <h2>Faça seu download</h2>
        <div className={styles.download}>
          <div>
            <img src={`/${slug}/logoyoutube.png`} alt="foto logo"></img>
            <p id="cor">
              <a href="indio.mp3" target="_blank">
                U.R.S.O - IUKA CARI
              </a>
            </p>
          </div>
          <div>
            <img src={`/${slug}/logoyoutube.png`} alt="foto logo"></img>
            <p>
              <a href="indio.mp3" target="_blank">
                U.R.S.O - Spirit at War
              </a>
            </p>
          </div>
          <div>
            <img src={`/${slug}/logoyoutube.png`} alt="foto logo"></img>
            <p>
              <a href="indio.mp3" target="_blank">
                U.R.S.O - Caos
              </a>
            </p>
          </div>
        </div>
      </section> */}

      <section className={styles.agenda}>
        <h2>Agenda de Shows</h2>
        <p className={styles.show}>Ainda Nada, Mais vai rolar</p>
      </section>

      <section className={styles.content}>
        <div className={styles.contat}>
          <h2>FORMULÁRIO DE CONTATO</h2>
          <form className={styles.form} method="POST" action="./email.php">
            <input
              className={styles.field}
              name="Nome"
              placeholder="Nome"></input>
            <input
              className={styles.field}
              name="email"
              placeholder="E-mail"></input>
            <textarea
              className={styles.field}
              name="mesage"
              placeholder="Digite sua mensagem aqui"></textarea>
            <input type="submit" value="Enviar"></input>
          </form>
        </div>
      </section>

      <footer className={styles.pe}>
        <p className={styles.pe}>Direitos Reservados Ogait Ashtar 2021</p>
      </footer>
    </div>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description} content="Generated by create next app} />
    //     <link rel="icon} href="/favicon.ico} />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{} "}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs} className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn} className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}>
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}>
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer">
    //       Powered by{} "}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg} alt="Vercel Logo} width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  );
}

export async function getServerSideProps({ params: { slug } }) {
  return {
    props: { slug },
  };
}
