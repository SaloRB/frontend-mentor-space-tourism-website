import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className="bg-[url('/assets/home/background-home-mobile.jpg')] bg-no-repeat bg-cover text-primary h-screen">
      <Head>
        <title>Space Tourism Website</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Nav />

      <main className="text-center mt-12 px-6">
        <h2 className="font-subtitle uppercase tracking-[2.7px]">
          So, you want to travel to
        </h2>
        <h1 className="font-title text-[80px] uppercase text-white">Space</h1>
        <p className="font-body leading-8 px-12 flex-grow">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <div className="h-[150px] w-[150px] bg-white flex items-center justify-center rounded-full mx-auto mt-[80px]">
          <p className="font-title uppercase text-xl text-black">Explore</p>
        </div>
      </main>
    </div>
  )
}
