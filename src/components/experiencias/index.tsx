import { Container } from './styles';
import SectionTitle from '../SectionTitle'
import ExperienciaItem from './experienciaItem'

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="3 anos" description="de Experiência" />
      <section>
        <ExperienciaItem 
        year="2022"
        title="Desenvolvedora Full Stack Jr"
        description="Realizo atividades relacionadas ao desenvolvimento de aplicações com ênfase em Node.js e Inteligência Artificial. "/>

       <ExperienciaItem 
        year="2021"
        title="Desenvolvedora Front End"
        description="Desenvolvimento de Sistemas Web com ênfase em HTML, CSS, Javascript e Bootstrap. "/>

        
       <ExperienciaItem 
        year="2020"
        title="Desenvolvimento de Sistemas"
        description="Atuo no Desenvolvimento de Sistemas Web com parcerias freelancers."/>
        
      </section>
    </Container>
  );
};

export default Experiencias;
