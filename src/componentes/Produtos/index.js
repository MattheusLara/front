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
  BotaoDoProduto,
  Filtro,
  FiltroPesquisa,
  BotaoFilter
} from './ElementosProduto'

export const Produto = ({titulo, dados}) => {
  const [produtos, setProdutos] = useState([]); 
  useEffect(() => {
      axios.get('https://8d4c-177-184-127-217.sa.ngrok.io/api/foods').then((response) => {
        setProdutos(response.data)
      });
    },[]);

    const [inputFilter, setInputFilter] = useState("");

    function buscarProduto(inputFilter){
        axios.get('https://8d4c-177-184-127-217.sa.ngrok.io/api/foods/filter?q=' + inputFilter);
    }

    function resetarFiltro(){
  
        axios.get('https://8d4c-177-184-127-217.sa.ngrok.io/api/foods').then((response) => {
          setProdutos(response.data)
        });
      }

    return (
        <ContainerProdutos>
          <ListaProdutos>{titulo}</ListaProdutos>
          <Filtro>
          <FiltroPesquisa type="text" value={inputFilter} placeholder="O que vai querer para hoje?" onChange={e => setInputFilter(e.target.value)}></FiltroPesquisa>
          <BotaoFilter onPress={resetarFiltro()}>X</BotaoFilter>
          <BotaoFilter onPress={buscarProduto(inputFilter)}>OK</BotaoFilter>
          </Filtro>
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