# 🔧 INSTRUÇÕES RÁPIDAS: SCREENSHOTS

## ✅ PROBLEMA RESOLVIDO
- Erros 404 de imagens corrigidos
- Placeholders temporários adicionados
- Sistema funcionando sem erros

## 📸 PARA ADICIONAR SUAS SCREENSHOTS:

### 1. **CAPTURAR IMAGENS**
Tire screenshots do seu App Delivery:
- `desktop-main.png` (tela principal)
- `mobile-view.png` (versão mobile)  
- `features-demo.png` (funcionalidades)
- `dashboard.png` (admin - opcional)

### 2. **SALVAR AQUI**
```
/home/matteusfernandes/Projetos/portifolio/public/images/projects/app-delivery/
```

### 3. **ATUALIZAR CÓDIGO**
No arquivo `src/data/projects.ts`, substitua:
```typescript
image: '/images/projects/app-delivery/placeholder.svg',
images: {
  main: '/images/projects/app-delivery/desktop-main.png',
  mobile: '/images/projects/app-delivery/mobile-view.png',
  features: '/images/projects/app-delivery/features-demo.png',
  dashboard: '/images/projects/app-delivery/dashboard.png'
},
```

### 4. **TESTAR**
```bash
npm run dev
# Acesse: http://localhost:3000/projetos
```

## 🎯 STATUS ATUAL:
- ✅ Sistema funcionando sem erros
- ✅ Placeholders temporários exibindo
- ⏳ Aguardando screenshots reais do App Delivery

**Quando adicionar as imagens reais, elas substituirão automaticamente os placeholders!**
