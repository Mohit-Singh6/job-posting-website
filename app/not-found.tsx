'use client';

import Link from 'next/link';
import { useSession } from "next-auth/react";

export default function NotFound() {

    const session = useSession();

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center space-y-8">
        {/* 404 Number */}
        <div className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          404
        </div>

        {/* Main Message */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Sorry, we couldn't find what you're looking for.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Back to Home
          </Link>
          {!session ? (
            <Link
                href="/auth/signin"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
            >
                Sign In
            </Link>
            ) : <></>
          }
        </div>
      </div>
    </div>
  );
}

