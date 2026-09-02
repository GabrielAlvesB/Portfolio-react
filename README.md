# Portfólio — Gabriel Alves

Portfólio pessoal construído com [Next.js](https://nextjs.org) (App Router).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — ambiente de desenvolvimento
- `npm run build` — build de produção
- `npm start` — serve o build de produção
- `npm run lint` — ESLint
- `npm run optimize-images` — otimiza as imagens em `public/img/perfil` e `public/img/projetos`

## Contato via WhatsApp

O número usado no botão flutuante, no formulário de contato e nos links de WhatsApp
fica em [`src/config/whatsapp.js`](src/config/whatsapp.js), com fallback para a
variável de ambiente `NEXT_PUBLIC_WHATSAPP_NUMBER` (veja `.env.example`).

## Deploy

Pronto para deploy na [Vercel](https://vercel.com) — basta importar o repositório,
sem configuração adicional.
