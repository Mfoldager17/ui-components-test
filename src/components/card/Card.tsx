import React from 'react'
import { twMerge } from 'tailwind-merge'
import './card.css'

type CardProps = {
    children: React.ReactNode;
    className?: string;
};


const Card = ({ children, className }: CardProps) => {
    let classNames;

    if (className?.includes('bg-'))
        classNames = className
    else {
        classNames = className + ' ' + 'cardColor'
    }

    return (
        <div className={twMerge('rounded-2xl m-3 flex flex-col place-content-center items-center w-[70%] flex-wrap min-h-[200px]', classNames)}>
            {children}
        </div>
    )
}

export default Card