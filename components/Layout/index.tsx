import Head from 'next/head'

const Layout: React.FC = ({children}) => {
  return (
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Learn next.JS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header style={{maxWidth: "900px", margin: "0 auto"}}>
      <h1>E-commerce</h1>
    </header>
    {children}
    </>
  )
}
export default Layout;