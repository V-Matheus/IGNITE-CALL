import { Button, TextInput } from '@ignite-ui/react';
import { Form } from './styles';
import { ArrowRight } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const claimUsernameFormSchema = z.object({
  username: z.string(),
})

type claimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<claimUsernameFormData>();

  async function handleClaimUsername(data: claimUsernameFormData) {
    console.log(data.username);
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      {/* @ts-ignore */}
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuario"
        {...register('username')}
      />

      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  );
}
