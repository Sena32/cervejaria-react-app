import React from 'react'
import { Card, CardContent, CardImg } from '../cards'
import imagem from '../../img_1.png'
import './beerItem.css'

const Item = ({ name, email, urlImg, nameImg, children }) => {const img = (urlImg===''?imagem:urlImg)

return(
    <Card size="small">
        <CardImg size="small" url={img} name={nameImg}></CardImg>
        <CardContent variant="card-content-overlay">
            <ul className="beerItem">
                <li className="white-shadow bold" >{name} </li>
                <li className=" underline" ><a href="#">{email}</a></li>

            </ul>
        </CardContent>
        {children}
    </Card>

)
}

export default Item
