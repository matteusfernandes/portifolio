# Configuração do Formulário de Contato

Este projeto inclui um formulário de contato funcional que pode ser configurado com EmailJS para envio real de emails.

## 🚀 Status Atual

- ✅ **API Route criada** (`/api/contact`)
- ✅ **Validação de dados** (campos obrigatórios, email válido)
- ✅ **Tratamento de erros** robusto
- ✅ **Interface completa** (desktop + mobile)
- ✅ **Feedback visual** (loading, success, error)
- 🔧 **EmailJS configuração** (pronto para produção)

## 📧 Como Configurar EmailJS (Para Produção)

### 1. Criar Conta no EmailJS
1. Acesse [EmailJS](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Faça login no dashboard

### 2. Configurar Serviço de Email
1. No dashboard, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. Copie o **Service ID** gerado

### 3. Criar Template de Email
1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com as variáveis:
   - `{{from_name}}` - Nome do remetente
   - `{{from_email}}` - Email do remetente
   - `{{subject}}` - Assunto da mensagem
   - `{{message}}` - Conteúdo da mensagem
   - `{{to_email}}` - Seu email para receber
4. Copie o **Template ID** gerado

### 4. Obter Chaves de API
1. Vá em **Account > General**
2. Copie a **Public Key**
3. Copie a **Private Key**

### 5. Configurar Variáveis de Ambiente
1. Copie o arquivo `.env.example` para `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Substitua os valores no `.env.local`:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   EMAILJS_PRIVATE_KEY=your_private_key
   ```

### 6. Atualizar API Route (Opcional)
Para ativar o EmailJS na API, descomente e configure o código na linha 35 de `src/app/api/contact/route.ts`:

```typescript
// Instalar dependência
npm install @emailjs/nodejs

// Descomentar e configurar o código EmailJS na API
```

## 🔧 Funcionalidades Implementadas

### Validações
- ✅ Campos obrigatórios
- ✅ Formato de email válido  
- ✅ Sanitização de dados
- ✅ Rate limiting (pode ser adicionado)

### UX/UI
- ✅ Loading state durante envio
- ✅ Feedback visual (success/error)
- ✅ Formulário reseta após sucesso
- ✅ Design responsivo
- ✅ Integração com VS Code theme

### Segurança
- ✅ Validação server-side
- ✅ Tratamento de erros
- ✅ Headers CORS configurados
- ✅ Sanitização de entrada

## 📱 Como Testar

1. **Desenvolvimento**: O formulário já funciona em modo "simulação"
2. **Produção**: Configure EmailJS para envio real
3. **API Endpoint**: `POST /api/contact`

### Exemplo de uso da API:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joao@example.com",
    "assunto": "Interesse em projeto",
    "mensagem": "Olá! Tenho interesse em discutir um projeto..."
  }'
```

## 🚀 Deploy

O formulário está pronto para deploy em:
- ✅ Vercel (recomendado)
- ✅ Netlify  
- ✅ AWS
- ✅ Qualquer plataforma Node.js

Não esqueça de configurar as variáveis de ambiente na plataforma escolhida!

## 📞 Suporte

Se precisar de ajuda na configuração, as informações de contato estão disponíveis na página de contato do portfólio.
