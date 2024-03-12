

import React from 'react';
import Link from "next/link";


export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Shopping List</h1>
      
      {/* Navigation to weekly projects */}
      <div className="flex flex-col items-center justify-center bg-blue-200 p-10">
        <h2 className="text-4xl font-mono font-bold text-black mb-5">CPRG 306 Assignments</h2>
        
        <Link href="/week-2">
          <a className="bg-orange-300 text-black font-bold py-3 px-6 rounded hover:text-orange-900 transition duration-200 mb-2">
            Click here to see my Project!
          </a>
        </Link>
        <Link href="/week-3">
          <a className="bg-orange-300 text-black font-bold py-3 px-6 rounded hover:text-orange-900 transition duration-200 mb-2">
            Click here to see my Project part 3!
          </a>
        </Link>
        <Link href="/week-4">
          <a className="bg-orange-300 text-black font-bold py-3 px-6 rounded hover:text-orange-900 transition duration-200 mb-2">
            Click here to see my Project part 4!
          </a>
        </Link>
        <Link href="/week-5">
          <a className="bg-orange-300 text-black font-bold py-3 px-6 rounded hover:text-orange-900 transition duration-200 mb-2">
            Click here to see my Project part 5!
          </a>
        </Link>
        <Link href="/week-6">
          <a className="bg-orange-300 text-black font-bold py-3 px-6 rounded hover:text-orange-900 transition duration-200 mb-2">
            Click here to see my Project part 6!
          </a>
        </Link>
        <Link href="/week-7">
          <a className="bg-orange-300 text-black font-bold py-3 px-6 rounded hover:text-orange-900 transition duration-200 mb-2">
            Click here to see my Project part 7!
          </a>
        </Link>
      </div>
    </div>
  );
}
