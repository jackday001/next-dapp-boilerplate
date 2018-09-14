import Container from '../layouts/Default/Container'
import Head from 'next/head'

export default function Dashboard() {
  return (
    <Container id="dashboard-page" className="py-4 md:py-8 lg:py-12" maxWidth="2xl">
      <Head>
        <title>Home</title>
        <meta name="description" content="Sushi" />
      </Head>
    </Container>
  )
}
