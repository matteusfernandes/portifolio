// Configuração do EmailJS para envio de emails
// Para usar em produção, você precisará:
// 1. Criar conta no EmailJS (https://www.emailjs.com/)
// 2. Configurar um serviço de email (Gmail, Outlook, etc.)
// 3. Criar um template de email
// 4. Obter as chaves necessárias

export const EMAILJS_CONFIG = {
  // Substitua pelos seus valores reais do EmailJS
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key',
  PRIVATE_KEY: process.env.EMAILJS_PRIVATE_KEY || 'your_private_key',
};

// Função para validar se todas as configurações estão presentes
export const isEmailJSConfigured = () => {
  return (
    EMAILJS_CONFIG.SERVICE_ID !== 'your_service_id' &&
    EMAILJS_CONFIG.TEMPLATE_ID !== 'your_template_id' &&
    EMAILJS_CONFIG.PUBLIC_KEY !== 'your_public_key' &&
    EMAILJS_CONFIG.PRIVATE_KEY !== 'your_private_key'
  );
};

// Tipos para o formulário de contato
export interface ContactFormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
  timestamp: string;
}
