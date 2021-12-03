import styled from 'styled-components';

export const ContainerProdutos = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const MolduraProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const CardDoProduto = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const Filtro = styled.div`
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
`;

export const FiltroPesquisa = styled.input`
  outline: none;
  border-radius: 4px;
  width: 300px;
  padding: 6px;
`;

export const ImagemDoPruduto = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ListaProdutos = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const NomeProduto = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const DetalhesDoProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const DescricaoDoProduto = styled.p`
  margin-bottom: 1rem;
`;

export const PrecoDoProduto = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const BotaoDoProduto = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const BotaoFilter = styled.button`
  width: 35px;
  height: 36px;
  font-size: 1rem;
  border: none;
  background: #ffc500;
  color: #000000;
  transition: 0.2 ease-out;
  border-radius: 4px;
  margin-left: 10px;

  &:hover {
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;