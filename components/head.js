import Head from 'next/head'

export default function PageHead(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="shortcut icon" href="/favicon.png"/>
    </Head>
  )
}