import React from 'react'
import { User } from '@prisma/client';
import Heading from '../Heading';
import Image from 'next/image';
import HeartButton from '../HeartButton';

interface ProductHeadProps {
    title: string;
    id: string;
    imageSrc: string;
    currentUser?: User | null;  
}

const ProductHead = ({
    title,
    id,
    imageSrc,
    currentUser
}: ProductHeadProps) => {

    return (
        <>
            <Heading 
                title={title}
            />  
            <div className='w-full h-[60vh] overflow-hidden rounded-xl relative'>
                <Image 
                    src={imageSrc}
                    fill
                    className='object-cover w-full'
                    alt='product'
                />
                <div className='absolute top-5 right-5'>
                    <HeartButton 
                        productId={id}
                        currentUser={currentUser}
                    />
                </div>
            </div>
        </>
    )
}

export default ProductHead