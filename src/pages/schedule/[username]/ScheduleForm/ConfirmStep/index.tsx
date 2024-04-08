import { Button, Text, TextArea, TextInput } from "@ignite-ui/react";
import { ConfirmForm, FormActions, FormHeader } from "./styles";
import { CalendarBlank, Clock } from "phosphor-react";

export function ConfirmeStep() {

  function handleConfirmeScheduling() {

  }

  return (
    <ConfirmForm as='form' onSubmit={handleConfirmeScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          22 de Setembro de 2022
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>

      <label>
        <Text size='sm'>Nome completo</Text>
        {/* @ts-ignore */}
        <TextInput placeholder="Seu nome" />
      </label>

      <label>
        <Text size='sm'>Endereço de e-mail</Text>
        {/* @ts-ignore */}
        <TextInput type='email' placeholder="victormatheus507@gmail.com" />
      </label>

      <label>
        <Text size='sm'>Obeservações</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type='button' variant='tertiary'>Cancelar</Button>
        <Button type='submit'>Confirmar</Button>
      </FormActions>
    </ConfirmForm>

  )
}
