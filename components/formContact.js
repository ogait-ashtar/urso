import styles from "../styles/FormContact.module.css";

export default function FormContact({ children }) {
  return (
    <section className={styles.content}>
      <div className={styles.cadastro}>
        <h2 className={styles.cad}>CADASTRE SUA BANDA </h2>
        <form className={styles.form} method="POST" action="./email.php">
          <input
            className={styles.field}
            name="Nome"
            placeholder="Nome da Banda"
          ></input>
          <input
            className={styles.field}
            name="email"
            placeholder="E-mail"
          ></input>
          <input
            className={styles.field}
            name="estilo musical"
            placeholder="Estilo Musical"
          ></input>
          <textarea
            className={styles.field}
            name="mesage"
            placeholder="Realese e Redes Sociais"
          ></textarea>
          <h3>ADICIONE FOTOS DA BANDA</h3>
          <input
            type="file"
            id="flimage"
            name="flimage"
            accept="image*/"
          ></input>
          <br></br>
          <input type="submit" value="Enviar"></input>
          <br></br>
        </form>
      </div>
    </section>
  );
}
