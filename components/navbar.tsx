
"use client";

import Image from 'next/image';
import Link from 'next/link';
import {middleware} from '../middleware';

import { useSession } from "next-auth/react";
import { logout } from '../lib/actions/auth';

export default function Navbar () {

    const {data: session} = useSession();

// [SessionProvider (Parent Wrapper)]
//        │ 
//        │ 1. Fetches user session from server ONCE.
//        │ 2. Stores it in a global browser-side memory bank (React Context).
//        ▼
//    [Your App Hierarchy]
//        │
//        ▼
// [useSession() (Any deep Client Component)]
//        │
//        └─► 3. Instantly grabs data from that shared memory bank.
//               (Zero network requests, zero screen flashing)

    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href='/'>
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Image src="/logo.png" width={32} height={32} alt="GetHired" className="w-8 h-8"/>
                        <h1 className='text-2xl font-bold text-gray-900 tracking-tight'>GetHired</h1>
                    </div>
                    </Link>
                    
                    {/* Navigation Links */}
                    <div className="flex gap-6 items-center">
                        <Link 
                            href="/jobs" 
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                        >
                            Browse Jobs
                        </Link>
                        <Link 
                            href="/aboutus" 
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                        >
                            About Us
                        </Link>
                        {session ? (
                            <div>
                                <Link 
                                    href="/post-job" 
                                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                                    >
                                    Post a job
                                </Link>
                                <button onClick={logout}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium ml-5"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : 
                            <Link 
                            href="/auth/signin" 
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                            >
                                SignIn
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}