import React from 'react';
import './card.css'
import { twMerge } from 'tailwind-merge';

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
    return (
        <div className={twMerge("centerWrap bg-gradient-to-tr from-slate-400 via-slate-200 to-slate-400 min-h-[180px] h-[97%] w-[97%] mx-5 rounded-2xl overflow-auto", className)}>
            {children}
        </div>
    )
};

export default CardContent;