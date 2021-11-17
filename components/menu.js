import styles from "../styles/Menu.module.css";
export default function Menu({}) {
  return (
    <div className={styles.menu}>
      <form className={styles.form} method="POST" action="./email.php">
        <input
          className={styles.field}
          name="buscar"
          placeholder="Buscar..."
        ></input>
      </form>
    </div>
  );
}
