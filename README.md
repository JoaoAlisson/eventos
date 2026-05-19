# Camarote Eventos — Painel

Sistema de gestão de eventos e camarotes VIP da Camarote Shows.

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS 4

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000) (ou outra porta se a 3000 estiver ocupada).
O home `/` redireciona para `/login`.

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

```
app/
├── app/
│   ├── login/page.tsx       # Tela de login
│   ├── layout.tsx           # Root layout (dark theme)
│   ├── page.tsx             # Home → redirect /login
│   └── globals.css          # Tailwind + animações custom
├── public/
│   ├── logo.jpg             # Logo Camarote Shows
│   └── hero-bg.jpg          # Background do painel lateral
└── package.json
```

## Deploy na Vercel

### Opção 1 — Vercel CLI (mais rápido)

```bash
npm i -g vercel
vercel
```

Da primeira vez, ele pergunta:
- Set up and deploy? **Y**
- Scope (sua conta) → confirmar
- Link to existing project? **N**
- Project name → `camarote-eventos` (ou outro)
- Diretório → **.** (raiz do projeto)
- Override settings? **N** (defaults do Next.js já funcionam)

Resultado: URL `*.vercel.app` em ~1 min. Para produção:

```bash
vercel --prod
```

### Opção 2 — GitHub + Vercel Dashboard

1. Criar repositório no GitHub e fazer push:
   ```bash
   gh repo create camarote-eventos --private --source=. --push
   # ou manualmente:
   # git remote add origin git@github.com:USUARIO/camarote-eventos.git
   # git push -u origin main
   ```
2. Acessar [vercel.com/new](https://vercel.com/new) e importar o repositório.
3. Vercel detecta Next.js automaticamente — clicar em **Deploy**.

### Variáveis de ambiente

Por enquanto não há ENV vars (a tela de login é apenas UI; autenticação real entra na próxima fase). Quando integrar Supabase e Mercado Pago, adicionar no painel Vercel:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
MERCADOPAGO_ACCESS_TOKEN=
RESEND_API_KEY=
TICKET_HMAC_SECRET=
```

## Próximas fases

Ver plano completo em `/Users/joaoalisson/.claude/plans/leia-o-md-me-sparkling-eclipse.md` e proposta comercial em `../PROPOSTA_COMERCIAL.md`.

- **Fase 1:** Vitrine pública + checkout PIX
- **Fase 2:** Painel admin + dashboard financeiro + cartão de crédito
- **Fase 3:** Promoter rastreado + portaria (PWA + scanner QR)
- **Fase 4:** Polimento, LGPD, runbook
