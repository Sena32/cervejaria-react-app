import React from 'react'
import { Card, CardImg } from '../cards'
import imagem from '../../img_1.png'
import './beerItem.css'

const ItemImg = ({ urlImg, nameImg, children }) => {const img = (urlImg===''?imagem:urlImg)

return(
    <Card size="large">
        <CardImg size="large" url={img} name={nameImg}></CardImg>
        {children}
    </Card>

)
}

export default ItemImg