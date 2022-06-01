import Nav from '../components/Nav'
import Image from 'next/image'

function Technology() {
  return (
    <div className="bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-no-repeat bg-cover text-primary min-h-screen pb-24">
      <Nav />

      <main className="text-center mt-12">
        <h2 className="font-subtitle uppercase tracking-[2.7px] mb-8 text-white">
          <span className="font-bold mr-[18px] opacity-25">03</span>
          Space launch 101
        </h2>

        <Image
          src="/assets/technology/image-launch-vehicle-landscape.jpg"
          width={375}
          height={170}
          objectFit="cover"
        />

        <div className="flex items-center justify-center space-x-4 mt-8">
          <div className="flex items-center justify-center h-[40px] w-[40px] bg-white rounded-full border border-white text-dark font-title">
            1
          </div>
          <div className="flex items-center justify-center h-[40px] w-[40px] bg-transparent rounded-full border border-white font-title">
            2
          </div>
          <div className="flex items-center justify-center h-[40px] w-[40px] bg-transparent rounded-full border border-white font-title">
            3
          </div>
        </div>

        <div className="mt-7">
          <p className="uppercase font-subtitle tracking-[2.36px] text-sm mb-2">
            The Terminology
          </p>
          <p className="font-title text-white uppercase text-2xl mb-4">
            Launch Vehicle
          </p>
          <p className="font-body leading-8 text-sm px-8">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </main>
    </div>
  )
}

export default Technology
