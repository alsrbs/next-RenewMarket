import Link from 'next/link';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { User } from '@prisma/client';

interface NavItemProps {
  mobile?: boolean;
  currentUser?: User | null; 
}
const NavItem = ({ mobile, currentUser }: NavItemProps) => {

  return (
    <ul className={`text-md justify-center flex gap-4 w-full items-center ${mobile && "flex-col h-full"}`}>
      {currentUser?.name === 'admin' && (
        <li className='py-2 text-center border-b-4 cursor-pointer'>
          <Link href="/admin">Admin</Link>
        </li>
      )}
      {currentUser
      ?
      <>
        <li className='py-2 text-center border-b-4 cursor-pointer'><Link href="/user">User</Link></li>
        <li className='py-2 text-center border-b-4 cursor-pointer'><button onClick={()=>signOut()}>Signout</button></li>
      </>
      :
      <li className='py-2 text-center border-b-4 cursor-pointer'><button onClick={() => signIn()}>Singin</button></li>
      }
    </ul>
  )
}

export default NavItem
