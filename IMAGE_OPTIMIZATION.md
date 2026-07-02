# Otimização de Imagens para Vercel

## Problema Identificado
A imagem do perfil estava com qualidade ruim e carregamento lento no Vercel devido à forma como estava sendo importada e ao tamanho dos arquivos.

## Soluções Implementadas

### 1. **Reorganização de Estrutura**
- Movidas as imagens de `public/img/perfil/` para `src/assets/img/perfil/`
- Vite agora processa e otimiza as imagens automaticamente durante o build

### 2. **Atualização do Vite Config**
- Adicionado `assetsInlineLimit: 0` para garantir que imagens sejam servidas como arquivos separados
- Otimização de deps para melhor carregamento de dependências
- Configuração de assets com nomes contendo hash para cache busting

### 3. **Melhorias CSS**
- Adicionados filtros de qualidade: `brightness(1.1) contrast(1.1) saturate(1.05)`
- Propriedades para melhor renderização: `image-rendering: crisp-edges`
- `backface-visibility: hidden` para melhor performance
- `-webkit-font-smoothing: antialiased` para suavização de bordas

### 4. **Otimização de Imagens**
- Instalado `sharp` para compressão de imagens
- Script `optimize-images.mjs` comprime automaticamente os PNGs
- **Redução de tamanho alcançada:**
  - FotoPerfil.png: 192.49 kB → 85.24 kB (55% menor)
  - desenho.png: 1,583.22 kB → 577.45 kB (63% menor)

### 5. **Melhorias de Carregamento**
- Adicionado `loading="eager"` para FotoPerfil (carrega na prioridade)
- Adicionado `loading="lazy"` para desenho.png (carrega sob demanda)
- Atributo `decoding="async"` para não bloquear renderização

### 6. **Configuração Vercel**
- Criado `.vercelignore` para excluir arquivos desnecessários do deploy

## Como Usar

### Para otimizar imagens após adicionar novas:
```bash
npm run optimize-images
```

### Para fazer build:
```bash
npm run build
```

## Benefícios

✅ Imagens carregam mais rápido no Vercel  
✅ Melhor qualidade visual com filtros otimizados  
✅ Redução de 55-63% no tamanho das imagens  
✅ Melhor performance e SEO  
✅ Cache automático com hash dos arquivos  
✅ Suporte a lazy loading para imagens secundárias

## Próximos Passos (Opcional)

Se quiser melhorias adicionais:
- Considerar converter para WebP (requer compatibilidade de navegador)
- Implementar imagem responsiva com `srcset`
- Adicionar placeholder/blur enquanto carrega
