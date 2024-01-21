import React from 'react'

type centerBoxProps = { children: React.ReactNode, className?: string }

const CenterBox = ({ children, className }: centerBoxProps) => {
    return (
        <div className={className + ' ' + 'flex flex-col place-content-center justify-center items-center text-center'}>
            {children}
        </div>
    )
}

export default CenterBox