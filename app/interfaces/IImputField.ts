// Para tipar os ícones passados pelo pai

import { LucideIcon } from 'lucide-react'
import { ChangeEvent } from 'react'

export default interface InputFieldProps {
  name: string
  placeholder: string
  icon: LucideIcon // Tipo do ícone recebido do pai
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
