import { IoLogoWhatsapp} from 'react-icons/io5';
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';
import SectionTitle from '../SectionTitle';
import FooterItem from './FooterItem';
import { Container, Button } from './styles';


const Whatsapp = () => {
  window.location.href = 'https://api.whatsapp.com/send?phone=5585985949769&text=Ol%C3%A1!%20Tenho%20interesse%20em%20trabalhar%20contigo!';
};

const GitHub = () => {
  window.location.href = 'https://github.com/AnaCarolinneS';
};

const Gmail = () => {
  window.location.href = 'mailto:anacaroline4512silva@gmail.com';
};

const Linkedin = () => {
  window.location.href = 'https://www.linkedin.com/in/ana-carolinne-silva-592b25161/';
};



function Footer() {
  return (
    <Container>
      <SectionTitle title="Tem interesse em trabalhar comigo?" description="Me mande uma mensagem!" />
      <section>
     <Button onClick={Whatsapp} ><FooterItem title="Whatsapp" icon={<IoLogoWhatsapp />}/></Button>
     <Button onClick={GitHub} ><FooterItem title="GitHub" icon={<AiFillGithub/>} /></Button>
     <Button onClick={Gmail} ><FooterItem title="Gmail" icon={<SiGmail/>} /></Button>
     <Button onClick={Linkedin} ><FooterItem title="Linkedin" icon={<AiFillLinkedin/>} /></Button>
      </section>
    </Container>
  );
}

export default Footer;