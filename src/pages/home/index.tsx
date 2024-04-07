import { Heading, Text } from '@ignite-ui/react';
import { Container, Hero, Previw } from './styles';

import previewImage from '../../assets/app-preview.png';
import Image from 'next/image';
import { ClaimUsernameForm } from './components/ClaimUserNameForm';

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Previw>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando aplicação em funcionamento"
        />
      </Previw>
    </Container>
  );
}
