import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  ContainerProdutos,
  MolduraProdutos,
  ListaProdutos,
  NomeProduto,
  CardDoProduto,
  ImagemDoPruduto,
  DetalhesDoProduto,
  DescricaoDoProduto,
  PrecoDoProduto,
  BotaoDoProduto
} from './ElementosProduto'

export const Produto = ({titulo, dados}) => {
  const [produtos, setProdutos] = useState([]); 
  useEffect(() => {
      axios.get('https://68cf-177-184-127-217.sa.ngrok.io/api/foods').then((response) => {
        setProdutos(response.data)
      });
    },[]);

    return (
        <ContainerProdutos>
          <ListaProdutos>{titulo}</ListaProdutos>
          <MolduraProdutos>
            {produtos.map((product, id) => {
              return (
                <CardDoProduto key={id}>
                  <ImagemDoPruduto src={product.imageURL} />
                  <DetalhesDoProduto>
                    <NomeProduto>{product.name}</NomeProduto>
                    <DescricaoDoProduto>{product.description}</DescricaoDoProduto>
                    <PrecoDoProduto>{"R$" + product.price}</PrecoDoProduto>
                    <BotaoDoProduto>{"Adicionar ao carrinho"}</BotaoDoProduto>
                  </DetalhesDoProduto>
                </CardDoProduto>
              );
            })}
          </MolduraProdutos>
        </ContainerProdutos>
      );
}