import Link from 'next/link'

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a> Anasayfa </a>
      </Link>
      <Link href="/about">
        <a> Hakkımızda </a>
      </Link>
    </nav>
  )
}

export default Navigation
