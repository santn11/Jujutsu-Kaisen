import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { LeftDiv, Title, Subtitle, Desc, Sep, Habilities, List, RightDiv, Footer, Card, Image, Name, Logo, Select, Scroll } from './styles'; // Verifique se os caminhos estão corretos
import personagens from './personagens'; // Verifique se o caminho está correto
import logoImg from '../img/jujutsu.png'; // Verifique se o caminho está correto

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    margin: 0;
    padding: 0;
    color: white;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    font-size: 1.2em;
    user-select: none;
    background: black;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const AppLogo = styled(Logo)`
  /* Exemplo de estilo específico para o logo */
  top: 2%; /* Ajuste no posicionamento */
`;

function Index() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState(personagens[0]);
  const [fade, setFade] = useState(false); // Estado para controlar o efeito de fade

  const scrollLeft = () => {
    setStartIndex(prev => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    if (startIndex + 8 < personagens.length) {
      setStartIndex(prev => prev + 1);
    } else {
      console.log("Não há mais personagens para exibir.");
    }
  };

  const handleCardClick = (personagem) => {
    setFade(true); // Ativa o efeito de fade-out
    setTimeout(() => {
      setSelectedCharacter(personagem);
      setFade(false); // Desativa o efeito de fade-out após a transição
    }, 300); // Tempo correspondente à transição (0.3s)
  };

  return (
    <>
      <GlobalStyle />
      <ContentWrapper>
        <AppLogo src={logoImg} alt="Jujutsu Kaisen" />
        <LeftDiv>
          <Title>{selectedCharacter.nome} {selectedCharacter.sobrenome}</Title>
          <Desc>
            {selectedCharacter.descricao}
          </Desc>
          <Sep />
          <Subtitle>Expansão de Domínio</Subtitle>
          <Habilities>
            <List>{selectedCharacter.expansão}</List>
          </Habilities>
          <Subtitle>Habilidades</Subtitle>
          <Habilities>
            <List>{selectedCharacter.habilidade}</List>
            {selectedCharacter.habilidade2 && <List>{selectedCharacter.habilidade2}</List>}
            {selectedCharacter.habilidade3 && <List>{selectedCharacter.habilidade3}</List>}
            {selectedCharacter.habilidade4 && <List>{selectedCharacter.habilidade4}</List>}
          </Habilities>
        </LeftDiv>
        <RightDiv className={fade ? "fade-out" : ""}>
          <Image src={selectedCharacter.img || exampleImage} alt={selectedCharacter.nome} />
        </RightDiv>
        <Footer>
          <Scroll onClick={scrollLeft}>
            <FaAngleLeft size={50} />
          </Scroll>
          <Select>
            {Array.isArray(personagens) && personagens.slice(startIndex, startIndex + 8).map((personagem, index) => (
              <Card key={index} onClick={() => handleCardClick(personagem)}>
                <Image src={personagem.card} alt={personagem.nome} />
                <Name>{personagem.nome}<br />{personagem.sobrenome}</Name>
                <p>{personagem.descricao}</p>
              </Card>
            ))}
          </Select>
          <Scroll onClick={scrollRight}>
            <FaAngleRight size={50} />
          </Scroll>
        </Footer>
      </ContentWrapper>
    </>
  );
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('root'));
