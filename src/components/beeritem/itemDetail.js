import React from 'react'
import { Card, CardContent } from '../cards'
import './beerItem.css'

const ItemDetail = ({ first_brewed, tagline, children }) => (
    <Card variant="detail">
        {children}
        <CardContent >
            <ul className="beerItem">
                <li className=" bold" >{first_brewed} </li>
                <li className=" bold underline" ><a href="#">{tagline}</a></li>
            </ul>
        </CardContent>
        
    </Card>

)


export default ItemDetail