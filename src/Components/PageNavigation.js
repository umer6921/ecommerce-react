import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PageNavigation({ title }) {
    return (
        <div>
            <div className='container my-3'>
                 <NavLink to="/">HOME</NavLink> / {title}
            </div>
        </div>

    )
}
