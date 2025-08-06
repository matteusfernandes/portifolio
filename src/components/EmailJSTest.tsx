// Teste simples para verificar se EmailJS está funcionando
'use client';

import { useState } from 'react';

export default function EmailJSTest() {
  const [testResult, setTestResult] = useState<string>('');

  const testEmailJS = async () => {
    try {
      setTestResult('Testando...');
      
      // Verificar se a biblioteca está carregada
      const emailjs = await import('@emailjs/browser');
      console.log('EmailJS loaded:', emailjs);
      
      // Verificar variáveis de ambiente
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      
      console.log('Env vars:', { serviceId, templateId, publicKey });
      
      if (!serviceId || !templateId || !publicKey) {
        setTestResult('❌ Variáveis de ambiente não configuradas');
        return;
      }
      
      // Tentar enviar um email de teste
      const result = await emailjs.default.send(
        serviceId,
        templateId,
        {
          from_name: 'Teste',
          from_email: 'teste@example.com',
          subject: 'Teste EmailJS',
          message: 'Teste de funcionamento',
          to_email: 'matteus_gbi@hotmail.com',
          timestamp: new Date().toLocaleString('pt-BR')
        },
        publicKey
      );
      
      console.log('EmailJS result:', result);
      setTestResult(`✅ Sucesso: ${result.status} - ${result.text}`);
      
    } catch (error) {
      console.error('Erro no teste:', error);
      setTestResult(`❌ Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h2>Teste EmailJS</h2>
      <button onClick={testEmailJS}>Testar EmailJS</button>
      <div style={{ marginTop: '20px', padding: '10px', background: '#f0f0f0' }}>
        {testResult || 'Clique no botão para testar'}
      </div>
    </div>
  );
}
