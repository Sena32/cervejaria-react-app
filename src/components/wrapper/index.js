import React from 'react'
import './wrapper.css'

const Wrapper = ({ children,variant,...props }) => (
    <div className =
    {   
        "wrapper" 
        + (variant === 'wrapper-flex' ? ' wrapper-flex' : '')
        + (variant === 'end' ? ' end' : '')
    }
    {...props}
    >
                    {children}
    </div>
)

export default Wrapper