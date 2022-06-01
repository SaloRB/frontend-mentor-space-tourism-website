import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

function Nav() {
  const [open, setOpen] = useState(false)

  const router = useRouter()

  return (
    <div className="px-6 pt-6 flex items-center justify-between">
      <Image
        className="cursor-pointer"
        src="/assets/shared/logo.svg"
        width={40}
        height={40}
        onClick={() => router.push('/')}
      />

      <Image
        className="cursor-pointer z-50"
        src={`/assets/shared/icon-${open ? 'close' : 'hamburger'}.svg`}
        width={24}
        height={21}
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="absolute w-2/3 bg-white/5 backdrop-blur-3xl top-0 right-0 bottom-0 z-40 px-8 pt-28 space-y-10">
          <Link href="/">
            <p className="cursor-pointer font-subtitle text-white uppercase tracking-[2.36px]">
              <span className="font-bold mr-3">00</span>Home
            </p>
          </Link>

          <Link href="/destination">
            <p className="cursor-pointer font-subtitle text-white uppercase tracking-[2.36px]">
              <span className="font-bold mr-3">01</span>Destination
            </p>
          </Link>

          <Link href="/crew">
            <p className="cursor-pointer font-subtitle text-white uppercase tracking-[2.36px]">
              <span className="font-bold mr-3">02</span>Crew
            </p>
          </Link>

          <Link href="/technology">
            <p className="cursor-pointer font-subtitle text-white uppercase tracking-[2.36px]">
              <span className="font-bold mr-3">03</span>Technology
            </p>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Nav
