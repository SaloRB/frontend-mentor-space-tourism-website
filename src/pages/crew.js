import Nav from '../components/Nav'
import Image from 'next/image'

function Crew() {
  return (
    <div className="bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-no-repeat bg-cover text-primary min-h-screen pb-24">
      <Nav />

      <main className="text-center mt-12 px-6">
        <h2 className="font-subtitle uppercase tracking-[2.7px] mb-8">
          <span className="font-bold mr-[18px] opacity-25">02</span>
          Meet your crew
        </h2>

        <Image
          src="/assets/crew/image-douglas-hurley.png"
          width={327}
          height={223}
          objectFit="contain"
        />

        <div className="w-[327px] h-[1px] bg-[#383B4B] -mt-[6px] mb-8 mx-auto" />

        <div className="flex items-center justify-center space-x-4">
          <div className="h-[10px] w-[10px] bg-white rounded-full"></div>
          <div className="h-[10px] w-[10px] bg-[#979797] rounded-full"></div>
          <div className="h-[10px] w-[10px] bg-[#979797] rounded-full"></div>
          <div className="h-[10px] w-[10px] bg-[#979797] rounded-full"></div>
        </div>

        <div className="mt-8">
          <p className="text-white opacity-50 uppercase font-title">
            Commander
          </p>
          <p className="font-title text-white uppercase text-2xl mb-4">
            Douglas Hurley
          </p>
          <p className="font-body leading-8 text-sm">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
      </main>
    </div>
  )
}

export default Crew
