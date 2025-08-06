import { useState, useEffect } from 'react';

interface ContactFormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

interface UseContactFormReturn {
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  submitForm: (formData: ContactFormData) => Promise<void>;
  resetStatus: () => void;
}

// Função auxiliar para logging de erros (apenas em desenvolvimento)
const logError = (error: unknown, context: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`❌ Erro em ${context}:`, error instanceof Error ? error.message : error);
  }
};

export const useContactForm = (): UseContactFormReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const resetStatus = () => {
    setSubmitStatus('idle');
  };

  // Auto-reset status após 5 segundos
  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timeout = setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
      return () => clearTimeout(timeout);
    }
  }, [submitStatus]);

  const submitForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Primeiro, validar via API
      const validationResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!validationResponse.ok) {
        const errorData = await validationResponse.json().catch(() => ({ error: 'Erro desconhecido' }));
        throw new Error(errorData.error || 'Erro na validação');
      }

      // Se validação passou, verificar se EmailJS está configurado
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        // EmailJS não configurado - sucesso apenas com validação
        setSubmitStatus('success');
        return;
      }

      // Importar EmailJS dinamicamente e enviar
      const emailjs = await import('@emailjs/browser');
      
      const templateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        subject: formData.assunto,
        message: formData.mensagem,
        to_email: 'matteus_gbi@hotmail.com',
        timestamp: new Date().toLocaleString('pt-BR')
      };

      await emailjs.default.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubmitStatus('success');

    } catch (error: unknown) {
      logError(error, 'submitForm');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitStatus,
    submitForm,
    resetStatus
  };
};
