# Otimização de Imagens

## Estrutura

Todas as imagens do site ficam em `public/` (perfil, projetos, skills, certificados,
avatar) e são servidas como arquivos estáticos pelo Next.js — sem necessidade de
`import` no código, apenas caminhos absolutos (`/img/...`).

## Compressão

O script `optimize-images.mjs` usa `sharp` para comprimir PNG/JPG em
`public/img/perfil/` e `public/img/projetos/`.

```bash
npm run optimize-images
```

## Boas práticas usadas

- `loading="eager"` na foto principal (prioridade de carregamento) e
  `loading="lazy"` na imagem secundária (carrega sob demanda)
- `decoding="async"` para não bloquear a renderização
- Nomes de arquivo sem acentos/caracteres especiais, evitando problemas de
  encoding de URL em produção

## Próximos passos (opcional)

- Migrar as imagens principais para `next/image` (otimização automática,
  `srcset` responsivo e lazy loading nativo)
- Converter para WebP/AVIF
