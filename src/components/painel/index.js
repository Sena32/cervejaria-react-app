import React from 'react'
import Wrapper from '../wrapper'
import './painel.css'

const Painel = ({title="BEBIDAS",children})=>(
    <div className="painel">
        <Wrapper>
            <h1 className="painel-title">
                {title}
            </h1>
            {children}
        </Wrapper>
    </div>
)

export default Painel