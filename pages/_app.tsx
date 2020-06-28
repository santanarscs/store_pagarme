import {AppProps } from 'next/app'
import Layout from '../components/Layout'
import AppProvider from '../hooks'
import 'react-credit-cards/es/styles-compiled.css';

const App = ({Component, pageProps}: AppProps) => (
  <AppProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
      }

      * {
        box-sizing: border-box;
      }
      ul {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </AppProvider>
)

export default App