import Head from 'next/head'
import Navbar from '../Navbar'

const Layout: React.FC = ({children}) => {
  return (
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Learn next.JS</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    {children}
    </>
  )
}
export default Layout;