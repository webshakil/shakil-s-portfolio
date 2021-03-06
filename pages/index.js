import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Clients from "./clients";
import Contact from "./contact";
import HomePage from "./homePage";
import Services from "./services";
import Works from "./works";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Shakil-Portfolio</title>
				<meta name="description" content="Generated by create next app" />
				
			</Head>
			<Navbar />
			<HomePage />
			<Services />
			<Works />
			<Clients />
			<Contact />
			<Footer />
		</div>
	);
}
