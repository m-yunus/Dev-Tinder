import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/tinder_logo.png';
import { Button } from '../ui/button';
import { Languages } from 'lucide-react';
export default function Header() {
  return (
    <header className="fixed top-0 w-full shadow-sm z-50">
      <nav className="max-w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center justify-end gap-11">
          <Link href="/" className="flex items-center">
            <div className=" flex items-center w-24 h-8 md:w-36 md:h-20">
              {" "}
              {/* Adjust sizes as needed */}
              <Image
                src={logo}
                alt="Dev_tinder"
                layout="responsive"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          </Link>
          <ul className="hidden  md:flex items-center  text-white gap-8  text-xl">
            <li>Products</li>
            <li>Learn</li>
            <li>Safety</li>
            <li>Support</li>
            <li>Download</li>
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <Link
            href="/auth/login"
            className="flex items-center text-white hover:text-gray-900"
          >
            <Languages />
            <span className="ml-1">Language</span>{" "}
            {/* Add some margin for spacing */}
          </Link>

          <Button
            asChild
            className="rounded-full hover:bg-black hover:text-white"
          >
            <Link
              href="/auth/register"
              className="bg-white hover:bg-black hover:text-white text-black px-4 py-2 md:text-xl   font-semibold  rounded-full"
            >
              Log in
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
