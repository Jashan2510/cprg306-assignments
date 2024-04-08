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
            Click here to see my Project!
        </Link>
        <Link href="/week-3">
            Click here to see my Project part 3!
        </Link>
        <Link href="/week-4">
            Click here to see my Project part 4!
        </Link>
        <Link href="/week-5">
            Click here to see my Project part 5!
        </Link>
        <Link href="/week-6">
            Click here to see my Project part 6!
        </Link>
        <Link href="/week-7">
            Click here to see my Project part 7!
        </Link>
        <Link href="/week-8">
            Click here to see my Project part 8!
        </Link>
        <Link href="/week-10">
            Click here to see my Project part 10!
        </Link>
      </div>
    </div>
  );
}
