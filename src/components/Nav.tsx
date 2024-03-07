import Link from "next/link"

function Nav() {
  return (
    <nav className='h-20 w-full bg-yellow-400'>
      <div className="container mx-auto px-5 h-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">Quizer</Link>
      </div>
    </nav>
  )
}

export default Nav