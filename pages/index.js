import Head from 'next/head'
import Layout from '../components/Layout'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Welcome to Next.js!</h1>
    </Layout>
  )
}

export default HomePage
