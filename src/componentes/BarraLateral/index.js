import React from 'react'
import { ConteinerBarraLateral, Icone, FecharIcone, MenuBarraLateral, BarraLateralLink, BarraLateralBnt, BarraLateralRoute} from './ElementosBarraLateral'

export default function BarraLateral({estaAberta, trocar}) {
    return (
        <ConteinerBarraLateral estaAberta={estaAberta} onClick={trocar}>
            <Icone>
                <FecharIcone/>
            </Icone>
            <MenuBarraLateral>
                <BarraLateralLink to="/">Disponiveis</BarraLateralLink>
                <BarraLateralLink to="/">AdicionarItem</BarraLateralLink>
                <BarraLateralLink to="/">Contato</BarraLateralLink>
            </MenuBarraLateral>
            <BarraLateralBnt>
                <BarraLateralRoute to="/">Peça agora</BarraLateralRoute>
            </BarraLateralBnt>
        </ConteinerBarraLateral>
    )
}
