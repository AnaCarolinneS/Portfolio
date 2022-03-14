import { AiFillHtml5 } from 'react-icons/ai';
import { SiIbmwatson, SiDialogflow, SiNestjs, SiDocker, SiTypescript, SiJavascript, SiNextdotjs} from 'react-icons/si';
import { DiMongodb, DiNodejs} from 'react-icons/di';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './conhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Skills" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Javascript" icon={<SiJavascript />} />
        <ConhecimentoItem title="Typescript" icon={<SiTypescript/>} />
        <ConhecimentoItem title="NodeJs" icon={<DiNodejs/>} />
        <ConhecimentoItem title="NestJs" icon={<SiNestjs />} />
        <ConhecimentoItem title="NextJs" icon={<SiNextdotjs />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="MongoDB" icon={< DiMongodb />} />
        <ConhecimentoItem title="Docker" icon={<  SiDocker />} />
        <ConhecimentoItem title="DialogFlow" icon={<SiDialogflow />} />
        <ConhecimentoItem title="Watson" icon={<SiIbmwatson />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;