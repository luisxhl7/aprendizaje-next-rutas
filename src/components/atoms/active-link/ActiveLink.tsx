"use client"

import Link from 'next/link'
import React from 'react'
import style from "./ActiveLink.module.css";
import { usePathname } from 'next/navigation';

interface Props {
    path: string,
    text: string
}

export const ActiveLink = ({path, text}:Props) => {

    const pathName = usePathname()
    
    return (
        <Link 
            href={path}
            className={`${style.link} ${ path === pathName && style['active-link']}`} 
        >
            {text}
        </Link>
    )
}
