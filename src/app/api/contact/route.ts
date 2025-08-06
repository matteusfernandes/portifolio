import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validação básica
    const { nome, email, assunto, mensagem } = body;
    
    if (!nome || !email || !assunto || !mensagem) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Log da mensagem recebida (para monitoramento)
    console.log('📧 Nova mensagem de contato:', {
      nome,
      email: email.replace(/(.{2})(.*)(@.*)/, '$1***$3'), // Mascarar email no log
      assunto,
      timestamp: new Date().toISOString()
    });

    // A API serve como endpoint de validação e log
    // O envio real será feito via EmailJS no frontend
    // Isso é mais seguro e compatível com as limitações do EmailJS
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Dados validados e prontos para envio' 
      },
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error('❌ Erro na validação da mensagem:', error);
    
    return NextResponse.json(
      { error: 'Erro na validação dos dados' },
      { status: 500 }
    );
  }
}
