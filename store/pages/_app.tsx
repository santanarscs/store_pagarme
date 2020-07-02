import {AppProps } from 'next/app'
import Layout from '../components/Layout'
import AppProvider from '../hooks'
import GlobalStyle from '../styles/global'
import 'react-credit-cards/es/styles-compiled.css';

const App = ({Component, pageProps}: AppProps) => (
  <AppProvider>
    <Layout>
      <Component {...pageProps} />
      <GlobalStyle />
    </Layout>
  </AppProvider>
)

export default App