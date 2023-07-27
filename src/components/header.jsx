import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {

    const router = useRouter();
    const path = router.asPath.split('/')[1];

    console.log(path);
    return (
      <header className="bg-[#ffffff00] fixed z-10 w-full">
        <div className="container px-6 sm:px-16 mx-auto h-[110px] flex justify-between items-center">
            <h1><Link href='/' className="font-bold text-18px sm:text-[23px]">Yuto Namba</Link></h1>
            <ul className="sm:gap-14 gap-5 text-[15px] flex">
                <li>
                    {path === '' ? <Link className="hover:text-gray-600 duration-300 border-b-2 border-gray-400 px-2 py-1" href='/'>Works</Link>
                    : <Link className="hover:text-gray-600 duration-300 sm:px-2 py-1" href='/'>Works</Link>
                    }
                </li>
                <li>
                    {path === 'about' ? <Link className="hover:text-gray-600 duration-300 border-b-2 border-gray-400 sm:px-2 py-1" href='/about'>About</Link>
                    : <Link className="hover:text-gray-600 duration-300 sm:px-2 py-1" href='/about'>About</Link>
                    }
                </li>
                <li>
                    {path === 'contact' ? <Link className="hover:text-gray-600 duration-300 border-b-2 border-gray-400 sm:px-2 py-1" href='/contact'>Contact</Link>
                    : <Link className="hover:text-gray-600 duration-300 sm:px-2 py-1" href='/contact'>Contact</Link>
                    }
                </li>
            </ul>
        </div>
      </header>
    )
  }
  