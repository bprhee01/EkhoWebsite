import Link from 'next/link'
import Image from 'next/image'
import npm from '../public/npm.png'

export default function Navbar() {
    return(
    <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/docs">Documentation</Link>
          <a> Our Logo</a>
          <Link href="https://twitter.com/Ekho_MS?lang=en"> Twitter</Link>
          <Link href="https://github.com/oslabs-beta/Ekho"> Github</Link>
          <Link href="https://www.npmjs.com/package/ekho-js" > npm </Link>
       
        <Image src={npm} alt="npm" height={50} width={50}/>
    </div>
    )
}