import styled from 'styled-components';

export const Logo = styled.img`
  position: absolute;
  right: 0;
  top: 1%;
  z-index: 999;
  height: 10%;
  width: 20%;
  object-fit: cover;

  @media (max-width: 800px) {
    width: 10%;
    height: 5%;
    padding: .5em;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

export const LeftDiv = styled.div`
  min-height: 75%;
  max-height: 75%;
  overflow: auto;
  width: 25%;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  color: white;
  margin: 0;
  padding: 1em;
  gap: 1em;
  transition: all 0.3s ease; /* Adicionando transição para suavizar as mudanças */

  @media (max-width: 1200px) {
    width: 100%;
    height: 80%;
    position: absolute;
    top: 0;
    background: transparent;
    z-index: 2;
    justify-content: center;
    overflow: hidden;
    padding: 0;
  }
`;

export const Title = styled.h1`
  margin: 0;
`

export const Desc = styled.p`
  font-size: 75%;
  text-align: center;
  margin: 0;

  @media (max-width: 1200px) {
    width: 80%;

  }
`

export const Sep = styled.hr`
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, #252526, transparent);
  border: none;
  margin: 0;
`

export const Subtitle = styled.h3`
  margin: 0;
`

export const Habilities = styled.ul`
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const List = styled.li`
  font-size: 75%;
`

export const RightDiv = styled.div`
  height: 100%;
  width: 75vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: opacity 0.3s ease;
  
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Para fazer a imagem cobrir a área da div */
    opacity: 1;
    transition: opacity 0.3s ease; 
  }

  /* Faz a imagem desaparecer durante a transição */
  &.fade-out > img {
    opacity: 0;
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: 80%;
    position: absolute;
    top: 0;
    background: transparent;
    z-index: 1;
    filter: brightness(0.2);
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: black;
  overflow: hidden;

  @media (max-width: 1200px) {
    height: 20%;
  }
`;

export const Scroll = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Select = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  overflow: hidden;
`;

export const Card = styled.div`
  width: calc(90vw / 8); 
  height: 100%;
  position: relative;
  overflow: hidden;
  
  &:hover {
    cursor: pointer;
  }
`;

export const Name = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  display: none;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%); /* Centralizando o texto */
  text-align: center;
  transition: opacity 0.3s ease; 
  
  /* Impede que o filtro do Card afete o Name */
  ${Card}:hover & {
    display: flex;
  }

  
  @media (max-width: 800px) {
    writing-mode: vertical-lr;
    white-space: nowrap;
    padding: .5em;
  }

  @media (max-width: 650px) {
    font-size: .5em;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Para fazer a imagem cobrir a área da div */

  ${Card}:hover & {
    filter: brightness(0.2); /* Escurecendo o card no hover */
  }
`;
