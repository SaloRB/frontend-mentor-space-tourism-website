import Head from 'next/head'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className="bg-[url('/assets/home/background-home-mobile.jpg')] bg-no-repeat bg-cover text-primary min-h-screen pb-8 md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')]">
      <Head>
        <title>Space Tourism Website</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Nav />

      <main className="text-center mt-12 md:mt-28 px-6 md:px-40 lg:mt-64 lg:flex lg:px-40 lg:items-end lg:justify-between lg:text-left">
        <div className="flex-1 lg:max-w-[450px]">
          <h2 className="font-subtitle uppercase tracking-[2.7px] text-xl">
            So, you want to travel to
          </h2>
          <h1 className="font-title text-[80px] md:text-[150px] uppercase text-white">
            Space
          </h1>
          <p className="font-body leading-8">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="h-[150px] w-[150px] md:h-[242px] md:w-[242px] lg:w-[274px] lg:h-[274px] bg-white grid place-content-center rounded-full mx-auto mt-20 lg:mx-0">
          <p className="font-title uppercase text-xl text-dark tracking-[1.25px] md:text-3xl">
            Explore
          </p>
        </div>
      </main>
    </div>
  )
}
