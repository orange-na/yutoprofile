import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {

    const router = useRouter();
    const path = router.asPath.split('/')[1];

    console.log(path);
    return (
      <header className="bg-white border-b border-gray-200 fixed z-10 w-full">
        <div className="container m-auto h-[150px] flex justify-between items-center">
            <h1><Link href='/' className="font-noto text-3xl">Yuto Namba</Link></h1>
            <ul className="flex gap-14 text-[20px]">
                <li>
                    {path === '' ? <Link className="hover:text-gray-600 duration-300 border-b-2 border-gray-400 px-2 py-1" href='/'>Works</Link>
                    : <Link className="hover:text-gray-600 duration-300 px-2 py-1" href='/'>Works</Link>
                    }
                </li>
                <li>
                    {path === 'about' ? <Link className="hover:text-gray-600 duration-300 border-b-2 border-gray-400 px-2 py-1" href='/about'>About</Link>
                    : <Link className="hover:text-gray-600 duration-300 px-2 py-1" href='/about'>About</Link>
                    }
                </li>
                <li>
                    {path === 'contact' ? <Link className="hover:text-gray-600 duration-300 border-b-2 border-gray-400 px-2 py-1" href='/contact'>Contact</Link>
                    : <Link className="hover:text-gray-600 duration-300 px-2 py-1" href='/contact'>Contact</Link>
                    }
                </li>
            </ul>
        </div>
      </header>
    )
  }
  