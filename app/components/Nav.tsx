'use client'

import React from 'react'
import {Session} from 'next-auth'
import {signIn} from 'next-auth/react'
import Image from 'next/image';

export default function Nav({user}:Session){
    return (
      <nav className="flex justify-between items-center py-8">
        <h2>next-verse</h2>
        <ul className="flex items-center gap-12">
          {/* <li>Products</li> */}
          {/* check auth */}
          {!user && (
            <li className="bg-orange-600 text-white py-2 px-4 rounded-md">
              <button onClick={() => signIn()}>Sign in</button>
            </li>
          )}
          {user && (
              <li>
                <Image
                  src={user?.image as string}
                  alt={user?.name as string}
                  height={48}
                  width={48}
                />
              </li>
      
          )}
        </ul>
      </nav>
    );
}
