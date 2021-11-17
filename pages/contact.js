import Head from "next/head";
import Image from "next/image";
// import styles from "../../styles/Band.module.css";
import FormContact from "../components/formContact";
import Menu from "../components/Menu";
import Search from "../components/search";
export default function Contact({}) {
  return (
    <>
      <Search></Search>
      <Menu></Menu>
      <FormContact></FormContact>
    </>
  );
}
