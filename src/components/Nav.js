import Image from 'next/image'
import { useRouter } from 'next/router'

function Nav() {
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
        className="cursor-pointer"
        src="/assets/shared/icon-hamburger.svg"
        width={24}
        height={21}
      />
    </div>
  )
}

export default Nav
