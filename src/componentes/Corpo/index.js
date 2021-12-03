import React, { useState } from 'react'
import BarraLateral from '../BarraLateral'
import { Navbar } from '../Navbar'
import { CorpoContainer , ConteudoCorpo, ItemsCorpo, CorpoH1, CorpoP, CorpoBtn} from './ElementosCorpo'

export const Corpo = () => {
    const [estaAberta, abrir] = useState(false)

    const trocar = () => {
        abrir(!estaAberta)
    }

    return (
        <CorpoContainer>
            <Navbar trocar={trocar}/>
            <BarraLateral estaAberta={estaAberta} trocar={trocar} />
            <ConteudoCorpo>
                <ItemsCorpo>
                    <CorpoH1>Culinaria Japonesa original</CorpoH1>
                    <CorpoP>Peça e descubra o melhor que a culinaria japonesa pode oferecer</CorpoP>
                    <CorpoBtn>Faça sua escolha</CorpoBtn>
                </ItemsCorpo>
            </ConteudoCorpo>
        </CorpoContainer>
    )
}