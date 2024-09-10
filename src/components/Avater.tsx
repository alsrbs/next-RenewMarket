import React from 'react'
import Image from 'next/image'

interface AvaterProps {
  src: string | null;
}

const Avater = ({ src }: AvaterProps) => {
  return (
    <Image 
      className='w-10 h-10 rounded-full'
      height={30}
      width={30}
      src={src || 'https://cdn.icon-icons.com/icons2/3217/PNG/512/unknown_user_avatar_profile_person_icon_196532.png'}
      alt='Avater'
    />
  )
}

export default Avater