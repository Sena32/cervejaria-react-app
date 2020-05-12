import React from 'react'
import { Card, CardContent } from '../cards'
import './beerItem.css'

const ItemDescription = ({ description, children }) => (
    <Card variant="description">
        {children}
        <CardContent >
            <ul className="beerItem">
                <li className=" bold" >{description}</li>
            </ul>
        </CardContent>
        
    </Card>

)


export default ItemDescription