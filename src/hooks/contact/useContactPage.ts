import { useState, useEffect } from 'react';
import { ContactFormData } from '@/types/contact';
import { INITIAL_FORM_DATA } from '@/constants/contact';
import { useContactForm } from './useContactForm';

export function useContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const { isSubmitting, submitStatus, submitForm, resetStatus } = useContactForm();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitForm(formData);
    } catch (error) {
      console.error('Erro no formulário:', error);
    }
  };

  const isFormValid = Object.values(formData).every(value => value.trim() !== '');

  // Resetar formulário quando enviado com sucesso
  useEffect(() => {
    if (submitStatus === 'success') {
      setFormData(INITIAL_FORM_DATA);
    }
  }, [submitStatus]);

  return {
    formData,
    isSubmitting,
    submitStatus,
    isFormValid,
    handleInputChange,
    handleSubmit,
    resetStatus
  };
}
