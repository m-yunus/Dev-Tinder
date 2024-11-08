

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/tinder-logo-2.png';
import { Button } from '../ui/button';
import { Languages } from 'lucide-react';

const CreateAccountHeader = () => {
  return (
    <header
      className={`fixed top-0 bg-black w-full border-b-2 border-gray-800 z-50 transition-all duration-300 
        'bg-black/50 backdrop-blur-md shadow-lg`}
    >
      <nav className="max-w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center justify-end gap-11">
          <Link href="/" className="flex items-center">
            <div className="flex items-center w-24 h-8 md:w-36 md:h-20">
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
          
        </div>
        <div className="flex items-center gap-8">
          <Link href="/auth/login" className="flex items-center text-white hover:text-gray-900">
            <Languages />
            <span className="ml-1">Language</span>
          </Link>

         
        </div>
      </nav>
    </header>
  )
}

export default CreateAccountHeader