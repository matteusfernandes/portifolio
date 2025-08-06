import { ContactInfo } from '@/types/contact';

export const CONTACT_INFO: ContactInfo[] = [
  {
    label: '_email',
    value: 'matteus_gbi@hotmail.com',
    link: 'mailto:matteus_gbi@hotmail.com',
    icon: '📧'
  },
  {
    label: '_linkedin',
    value: 'linkedin.com/in/matteusfernandes',
    link: 'https://linkedin.com/in/matteusfernandes',
    icon: '💼'
  },
  {
    label: '_github',
    value: 'github.com/matteusfernandes',
    link: 'https://github.com/matteusfernandes',
    icon: '🔗'
  },
  {
    label: '_telefone',
    value: '+55 (77) 99109-9699',
    icon: '📱'
  }
];

export const INITIAL_FORM_DATA = {
  nome: '',
  email: '',
  assunto: '',
  mensagem: ''
};
