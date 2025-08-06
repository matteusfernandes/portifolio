export interface ContactFormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  link?: string;
  icon: string;
}

export type SubmitStatus = 'idle' | 'success' | 'error';
