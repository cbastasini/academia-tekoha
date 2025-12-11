# 🚀 GUIA RÁPIDO DE DEPLOY - Academia Tekoha

## ✅ PASSO 1: Preparar o Projeto

### No seu computador:

```bash
# 1. Baixar e descompactar o projeto
# (Você recebeu academia-tekoha.zip)

# 2. Abrir o terminal na pasta do projeto
cd academia-tekoha

# 3. Instalar dependências
npm install

# 4. Testar localmente (opcional)
npm run dev
# Acesse: http://localhost:4321
```

---

## ✅ PASSO 2: Subir para o GitHub

### Criar repositório:

1. Acesse: https://github.com
2. Clique em "New repository"
3. Nome: `academia-tekoha`
4. Tipo: Public
5. Clique em "Create repository"

### No terminal:

```bash
git init
git add .
git commit -m "Site Academia Tekoha - Deploy inicial"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/academia-tekoha.git
git push -u origin main
```

---

## ✅ PASSO 3: Deploy no Vercel (RECOMENDADO)

### Método mais fácil:

1. **Acesse**: https://vercel.com
2. **Faça login** com GitHub
3. **Clique em** "Add New..." → "Project"
4. **Selecione** o repositório `academia-tekoha`
5. **Clique em** "Import"
6. **Vercel detecta Astro automaticamente**
7. **Clique em** "Deploy"

**⏱️ Em 2 minutos seu site estará no ar!**

URL temporária: `academia-tekoha.vercel.app`

---

## ✅ PASSO 4: Configurar Domínio (academiatekoha.com.br)

### No Registro.br:

1. Acesse o painel do Registro.br
2. Vá em **Zona de DNS**
3. **Adicione estes registros**:

```
Tipo: A
Host: @
Dados: 76.76.21.21
TTL: 3600

Tipo: CNAME
Host: www
Dados: cname.vercel-dns.com
TTL: 3600
```

4. **Salvar alterações**

### No Vercel:

1. Acesse seu projeto
2. **Settings** → **Domains**
3. Adicione: `academiatekoha.com.br`
4. Adicione também: `www.academiatekoha.com.br`
5. **Aguarde propagação** (até 48h, geralmente 1-2h)

---

## ✅ PASSO 5: Configurar SEO

### Google Search Console:

1. Acesse: https://search.google.com/search-console
2. **Adicionar propriedade**: `https://academiatekoha.com.br`
3. **Verificar** (Vercel facilita isso)
4. **Enviar sitemap**: `https://academiatekoha.com.br/sitemap-index.xml`

### Google Business Profile:

1. Acesse: https://business.google.com
2. **Atualizar/criar** perfil da academia
3. **Adicionar o website**: academiatekoha.com.br
4. **Verificar** informações de contato

---

## ✅ PASSO 6: Adicionar Posts no Blog

### No seu computador:

1. Abra a pasta: `src/content/blog/`
2. Crie um arquivo: `nome-do-post.md`
3. Adicione o conteúdo:

```markdown
---
title: "Título do Post"
description: "Descrição para SEO"
pubDate: 2025-01-15
author: "Academia Tekoha"
image: "/images/blog/imagem.jpg"
tags: ["judô", "jiu-jitsu"]
---

Conteúdo do post em Markdown...

## Subtítulo

Texto aqui...
```

4. Salvar o arquivo
5. Fazer commit e push:

```bash
git add .
git commit -m "Novo post: Nome do Post"
git push
```

**Vercel faz deploy automático!**

---

## ✅ PASSO 7: Manutenção

### Atualizar conteúdo:

1. Editar arquivos localmente
2. Fazer commit e push
3. Vercel atualiza automaticamente

### Adicionar imagens:

1. Adicionar em: `public/images/`
2. Referenciar como: `/images/nome.jpg`
3. Commit e push

---

## 📞 SUPORTE

**Dúvidas técnicas:**
- Documentação Astro: https://docs.astro.build
- Documentação Vercel: https://vercel.com/docs
- Suporte Vercel: suporte gratuito via chat

**Contato Academia:**
- WhatsApp: (11) 98444-3048
- Email: contato@academiatekoha.com.br

---

## 🎉 CHECKLIST FINAL

Após o deploy, verifique:

- [ ] Site acessível em academiatekoha.com.br
- [ ] SSL ativo (cadeado verde no navegador)
- [ ] Todas as páginas carregando
- [ ] Blog funcionando
- [ ] Links de redes sociais corretos
- [ ] Telefone clicável no mobile
- [ ] Google Search Console configurado
- [ ] Google Business atualizado

---

## 💡 DICAS

**Performance:**
- Vercel CDN global = site rápido em qualquer lugar
- SSL automático e grátis
- Updates automáticos quando você faz push

**Custos:**
- Vercel: R$ 0 (plano Hobby)
- GitHub: R$ 0 (repositório público)
- Domínio: ~R$ 40/ano (já tem)

**Backup:**
- Código no GitHub = backup automático
- Vercel mantém histórico de deploys
- Pode voltar para versões anteriores

---

**🥋 Boa sorte com o novo site da Academia Tekoha!**
