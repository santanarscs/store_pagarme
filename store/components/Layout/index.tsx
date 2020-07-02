import Head from 'next/head'
import Navbar from '../Navbar'

const Layout: React.FC = ({children}) => {
  return (
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Learn next.JS</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap" rel="stylesheet"></link>
    </Head>
    <Navbar />
    {children}
    </>
  )
}
export default Layout;