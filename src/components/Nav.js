import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

function Nav() {
  const [open, setOpen] = useState(false)

  const router = useRouter()

  return (
    <div className="px-6 md:px-10 lg:pl-14 pt-6 lg:pt-14 lg:px-0 flex items-center justify-between">
      <div className="relative h-10 h- w-10 md:h-12 md:w-12 cursor-pointer">
        <Image
          className="cursor-pointer"
          src="/assets/shared/logo.svg"
          layout="fill"
          onClick={() => router.push('/')}
        />
      </div>

      <div className="md:hidden">
        <Image
          className="z-50 cursor-pointer"
          src={`/assets/shared/icon-${open ? 'close' : 'hamburger'}.svg`}
          width={24}
          height={21}
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Tablet Links */}
      <div className="hidden lg:hidden md:inline-flex bg-white/5 backdrop-blur-3xl absolute top-0 right-0 h-24 w-[450px] items-center justify-center space-x-9">
        <Link href="/">
          <p
            className={`${router.pathname === '/' && 'border-b-2'} tablet-link`}
          >
            Home
          </p>
        </Link>

        <Link href="/destination">
          <p
            className={`${
              router.pathname === '/destination' && 'border-b-2'
            } tablet-link`}
          >
            Destination
          </p>
        </Link>

        <Link href="/crew">
          <p
            className={`${
              router.pathname === '/crew' && 'border-b-2'
            } tablet-link`}
          >
            Crew
          </p>
        </Link>

        <Link href="/technology">
          <p
            className={`${
              router.pathname === '/technology' && 'border-b-2'
            } tablet-link`}
          >
            Technology
          </p>
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:hidden lg:inline-flex bg-white/5 backdrop-blur-3xl h-24 w-[830px] items-center justify-center space-x-9">
        <Link href="/">
          <p
            className={`${router.pathname === '/' && 'border-b-2'} tablet-link`}
          >
            <span className="font-bold mr-3">01</span>Home
          </p>
        </Link>

        <Link href="/destination">
          <p
            className={`${
              router.pathname === '/destination' && 'border-b-2'
            } tablet-link`}
          >
            <span className="font-bold mr-3">02</span>Destination
          </p>
        </Link>

        <Link href="/crew">
          <p
            className={`${
              router.pathname === '/crew' && 'border-b-2'
            } tablet-link`}
          >
            <span className="font-bold mr-3">03</span>Crew
          </p>
        </Link>

        <Link href="/technology">
          <p
            className={`${
              router.pathname === '/technology' && 'border-b-2'
            } tablet-link`}
          >
            <span className="font-bold mr-3">04</span>Technology
          </p>
        </Link>
      </div>

      {/* Mobile Links */}
      <div
        className={`md:hidden absolute w-2/3 bg-white/5 backdrop-blur-3xl top-0 right-0 bottom-0 z-40 px-8 pt-28 space-y-10 transition duration-300 transform ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-[1000px] '
        } `}
      >
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
    </div>
  )
}

export default Nav
