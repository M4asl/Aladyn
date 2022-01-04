import Head from "next/head";

const Layout = ({ children, title }) => (
  <>
    {title && (
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
    )}
    {children}
  </>
);

export default Layout;
