import React from 'react'
import { href, Link } from 'react-router-dom'

function TextLink({children,href}) {
  return (
    <a href={href} className='text-brand-accent underline decoration-brand-accent hover:text-brand-accent/60 font-extrabold'>
        {children}
    </a>
  )
}

export default TextLink