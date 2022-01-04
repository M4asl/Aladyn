import Head from "next/head";
import NavBar from "./Navbar/Navbar";
// import Footer from '../footer'

const Main = ({ children }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Aladyn pralnia dywanow" />
        <meta property="og:title" content="Aladyn prlnia dywanow i tapicerki" />
        <meta property="og:site_name" content="Aladyn Strona Glowna" />
        <meta property="og:type" content="website" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <title>Aladyn - pralnia dywanow</title>
      </Head>

      <NavBar />

      {children}

      {/* <Footer /> */}
    </div>
  );
};

export default Main;
