import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';

function NavBar() {
  return (
    <nav className="flex justify-between h-[7vh] border-b-[2px] border-green-400">
        <div className="flex h-inherit justify-center items-center">
            <Link href="/">
                <h1 className="text-2xl py-4 pl-4 hover:blur-[0.3px] ease-in-out">
                    MoToken
                </h1>
            </Link>
        </div>
        <div className="flex h-inherit justify-center items-center">
            <Button 
                asChild 
                variant="link"
                className="bg-white text-black"
            >
                <Link href="/">Home</Link>
            </Button>
            <Button 
                asChild 
                variant="link"
                className="bg-white text-black mr-3"
            >
                <Link href="/trending">Trending</Link>
            </Button>
        </div>
    </nav>
  )
}

export default NavBar;