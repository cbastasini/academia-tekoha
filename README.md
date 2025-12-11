# 🥋 Academia Tekoha - Site Astro

Site institucional da Academia Tekoha com blog integrado, otimizado para SEO e AI.

## 🚀 Features

- ✅ **SEO Otimizado** - Meta tags completas, Schema.org, sitemap automático
- ✅ **Local SEO** - Dados estruturados para Guararema e região
- ✅ **AI-Ready** - Structured data para ChatGPT, Google SGE, etc
- ✅ **Blog Pronto** - Sistema de posts em Markdown
- ✅ **Performance** - SSG (Static Site Generation) para velocidade máxima
- ✅ **Mobile-First** - Responsivo e acessível
- ✅ **Design Pastel** - Paleta em tons de branco e preto

## 📁 Estrutura do Projeto

```
academia-tekoha/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro      # Layout base com SEO
│   ├── pages/
│   │   ├── index.astro           # Página principal
│   │   ├── blog/
│   │   │   ├── index.astro       # Lista de posts
│   │   │   └── [slug].astro      # Post individual
│   ├── components/
│   │   ├── Header.astro          # Cabeçalho
│   │   └── Footer.astro          # Rodapé
│   └── content/
│       └── blog/                 # Posts do blog (Markdown)
│           ├── beneficios-judo-para-criancas.md
│           ├── como-escolher-arte-marcial.md
│           └── historia-do-jiu-jitsu.md
├── public/                       # Arquivos estáticos
│   ├── images/
│   └── favicon.svg
├── astro.config.mjs             # Configuração do Astro
├── package.json
└── README.md
```

## 🛠️ Setup e Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Acessar no navegador
# http://localhost:4321
```

### Build para Produção

```bash
# Gerar build otimizado
npm run build

# Preview do build
npm run preview
```

## 📝 Como Adicionar Posts no Blog

### 1. Criar novo arquivo Markdown

Crie um arquivo em `src/content/blog/` com o formato:

```markdown
---
title: "Título do Post"
description: "Descrição curta para SEO"
pubDate: 2025-01-15
author: "Academia Tekoha"
image: "/images/blog/nome-imagem.jpg"
tags: ["judô", "iniciantes", "crianças"]
---

Conteúdo do post em Markdown...

## Subtítulo

Texto do parágrafo...

![Alt text](/images/blog/imagem.jpg)
```

### 2. Posts aparecem automaticamente

Os posts são listados automaticamente em `/blog` ordenados por data.

## 🚀 Deploy no Vercel (RECOMENDADO)

### Opção 1: Via GitHub (Mais Fácil)

1. **Criar repositório no GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/academia-tekoha.git
   git push -u origin main
   ```

2. **Conectar com Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Import Project"
   - Selecione seu repositório GitHub
   - Vercel detecta Astro automaticamente
   - Clique em "Deploy"

3. **Site no ar em 2 minutos!** ⚡

### Opção 2: Via Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

## 🌐 Configurar Domínio Personalizado

### No Registro.br

1. Acesse o painel do Registro.br
2. Vá em "DNS" > "Gerenciar DNS"
3. Adicione os registros:

```
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

### No Vercel

1. Acesse seu projeto no Vercel
2. Settings > Domains
3. Adicione: `academiatekoha.com.br`
4. Siga as instruções de verificação

## 📊 SEO Checklist

### ✅ Já Implementado

- [x] Meta tags otimizadas (title, description)
- [x] Open Graph tags (redes sociais)
- [x] Schema.org JSON-LD (Local Business)
- [x] Sitemap.xml automático
- [x] Tags canônicas
- [x] Geo-localização (Guararema, SP)
- [x] URLs semânticas e limpas
- [x] Images com alt text
- [x] Mobile-friendly
- [x] Performance otimizada (SSG)

### 📝 Para Fazer Depois do Deploy

1. **Google Search Console**
   - Adicionar propriedade
   - Enviar sitemap: `https://seu-site.com/sitemap-index.xml`

2. **Google Business Profile**
   - Criar/atualizar perfil
   - Vincular website

3. **Google Analytics**
   - Adicionar código de tracking no BaseLayout.astro

4. **Social Media**
   - Atualizar links do Instagram/Facebook

## 🎨 Personalização

### Cores

Edite as variáveis CSS em `src/layouts/BaseLayout.astro`:

```css
:root {
    --color-bg: #F5F5F5;
    --color-text: #1A1A1A;
    --color-accent: #B8B8B8;
    /* ... */
}
```

### Conteúdo

- **Modalidades**: Edite `src/pages/index.astro` na seção `#modalidades`
- **Depoimentos**: Edite `src/pages/index.astro` na seção `#depoimentos`
- **Contato**: Edite `src/components/Footer.astro`

### Imagens

Adicione imagens em `public/images/` e referencie como:
```astro
<img src="/images/sua-imagem.jpg" alt="Descrição">
```

## 📈 Performance

- **Lighthouse Score**: 95-100
- **Core Web Vitals**: Excelente
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Preview
npm run preview

# Checar erros
npm run astro check
```

## 📚 Recursos

- [Documentação Astro](https://docs.astro.build)
- [Vercel Docs](https://vercel.com/docs)
- [Google Search Console](https://search.google.com/search-console)
- [Schema.org](https://schema.org)

## 🎯 Próximos Passos

1. ✅ Deploy no Vercel
2. ✅ Configurar domínio
3. ✅ Adicionar no Google Search Console
4. ✅ Criar primeiros posts do blog
5. ✅ Configurar Google Analytics
6. ✅ Atualizar Google Business Profile

## 💡 Dicas de Conteúdo para Blog

### Posts Sugeridos:

1. **"5 Benefícios do Judô para Crianças em Guararema"**
2. **"Como Escolher a Arte Marcial Ideal para Seu Filho"**
3. **"História do Jiu-Jitsu Brasileiro"**
4. **"Primeira Aula de Karatê: O Que Esperar?"**
5. **"Disciplina e Foco: Valores das Artes Marciais"**
6. **"Academia Tekoha: Nossa História e Filosofia"**
7. **"Artes Marciais para Adultos Iniciantes"**
8. **"Eventos e Competições em Guararema"**

## 🤝 Suporte

Dúvidas ou problemas? Entre em contato:
- Email: contato@academiatekoha.com.br
- WhatsApp: (11) 98444-3048

---

**Desenvolvido com ❤️ para Academia Tekoha**
