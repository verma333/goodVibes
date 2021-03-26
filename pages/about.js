import Head from 'next/head'
import Landing from '@/components/About/About'

export default function Home() {
  return (
    
    <div>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Landing/>
    </div>
   
  )
}
