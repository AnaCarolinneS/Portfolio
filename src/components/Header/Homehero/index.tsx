import { ReactNode } from 'react';
import { Container, TextContainer, InfosContainer, CodeItem } from '../Homehero/styles';
import picture from '../../../assests/perfil.png'


function HomeHero() {
  return (
    <>
      <Container>
        <div>
          <TextContainer>
            <h1>Olá!</h1>
            <h2 className='message'>Meu nome é Carol</h2>
          </TextContainer>
          <InfosContainer>
            <CodeItem data-aos="zoom-in">
              <span className="comment">//Minha apresentação</span>
              <span className="purple">Infos</span> {'\u007B'}
              <div>
                Nome: <span className="blue">Ana Carolinne Silva</span>
              </div>
              <div>
                Cidade: <span className="blue">Fortaleza - Ce</span>
              </div>
              {'\u007D'}
            </CodeItem>
            <CodeItem data-aos="zoom-in">
              <span className="purple">Cargo</span> {'\u007B'}
              <div>
                Função: <span className="blue">Desenvolvedora Full Stack Jr</span>
              </div>
              {'\u007D'}
            </CodeItem>
          </InfosContainer>
        </div>
        <img src={picture} alt='' />
      </Container>
    </>
  );
}

export default HomeHero;
