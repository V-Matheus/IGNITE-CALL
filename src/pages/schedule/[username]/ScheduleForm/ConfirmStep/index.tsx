import { Button, Text, TextArea, TextInput } from '@ignite-ui/react';
import { ConfirmForm, FormActions, FormError, FormHeader } from './styles';
import { CalendarBlank, Clock } from 'phosphor-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';

const confirmFormSchema = z.object({
  name: z.string().min(3, {
    message: 'O nome precisa de no mínimo de 3 caracteres',
  }),
  email: z.string().email({ message: 'Digite um email válido' }),
  observations: z.string().nullable(),
});

type ConfirmeFormData = z.infer<typeof confirmFormSchema>;

interface ConfirmeStepProps {
  schedulingDate: Date
  onCancelConfirmation: () => void
}

export function ConfirmeStep({schedulingDate, onCancelConfirmation}: ConfirmeStepProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmeFormData>({
    resolver: zodResolver(confirmFormSchema),
  });

  function handleConfirmeScheduling(data: ConfirmeFormData) {
    console.log(data);
  }

  const describeDate = dayjs(schedulingDate).format('DD[ de ]MMMM[ de ]YYYY')
  const describedTime = dayjs(schedulingDate).format('HH:mm[h]')  

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmeScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          {describeDate}
        </Text>
        <Text>
          <Clock />
          {describedTime}
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome completo</Text>
        {/* @ts-ignore */}
        <TextInput placeholder="Seu nome" {...register('name')} />
        {errors.name && <FormError size="sm">{errors.name.message}</FormError>}
      </label>

      <label>
        <Text size="sm">Endereço de e-mail</Text>
        {/* @ts-ignore */}
        <TextInput
          type="email"
          placeholder="victormatheus507@gmail.com"
          {...register('email')}
        />
        {errors.email && (
          <FormError size="sm">{errors.email.message}</FormError>
        )}
      </label>

      <label>
        <Text size="sm">Obeservações</Text>
        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button onClick={onCancelConfirmation} type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          Confirmar
        </Button>
      </FormActions>
    </ConfirmForm>
  );
}
