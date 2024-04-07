import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react';
import { ArrowRight } from 'phosphor-react';

import { Container, Header } from '../styles';
import { ConnetBox, ConnetItem } from './styles';

export default function Register() {
  // async function handleRegister() {

  // }

  return (
    <>
      <Container>
        <Header>
          <Heading as="strong">Conecte sua agenda!</Heading>
          <Text>
            Conecte o seu calendário para verificar automaticamente as horas
            ocupadas e os novos eventos à medida em que são agendados.
          </Text>

          <MultiStep size={4} currentStep={2} />
        </Header>

        <ConnetBox>
          <ConnetItem>
            <Text>Google Calendar</Text>
            <Button variant="secondary" size="sm">
              Conectar
            </Button>
          </ConnetItem>

          <Button type="button">
            Próximo passo
            <ArrowRight />
          </Button>
        </ConnetBox>
      </Container>
    </>
  );
}
