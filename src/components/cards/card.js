import React from 'react'
import './card.css'

const Card = ({ variant,size,children }) =>(
    
    <div className=
    {
    "card"
    + (size==='small' ? ' card-small' : '')
    + (size==='large' ? ' card-large' : '')
    + (variant==='detail' ? ' card-detail' : '')
    + (variant==='description' ? ' card-description' : '')
    }
    >
    { children }
    </div>

) 

export default Card
