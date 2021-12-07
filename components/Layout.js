import Head from 'next/head'
import Navigation from './Navigation'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Main Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main> {children} </main>
      <footer> footer </footer>
    </div>
  )
}

export default Layout
