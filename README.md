# site_library — Frontend

Uma aplicação frontend (React) para o projeto "Library".

IMPORTANTE: ignore a pasta `/backend` deste repositório para fins de backend — o backend está em outro repositório: https://github.com/starzlocker/library_backend

Este README descreve como rodar, buildar e integrar o frontend com o backend.

## Estrutura resumida

- `index.html` — página principal (app React empacotado ou estático)
- `src/` — código-fonte React (se aplicável)
- `public/` — assets públicos (imagens, ícones, etc.)
- `build/` ou `dist/` — saída gerada pelo bundler (Vite/CRA) após `npm run build`

## Requisitos

- Node.js 18+ (recomendado)
- npm ou pnpm

## Uso rápido (desenvolvimento)

Se este projeto usa Vite/CRA e possui `package.json`:

```bash
# instalar dependências
npm install

# rodar em modo dev (verifique o script exato em package.json: "dev" ou "start")

```

Abra o navegador em `http://localhost:5173` (Vite) ou na porta indicada pelo script.

## Gerar build (produção)

```bash
npm run build
```

O comando acima gera a pasta `build/` ou `dist/` com os arquivos estáticos prontos para deploy.

## Servir a versão estática localmente

Opções rápidas:

- Usar um servidor estático (ferramenta `serve`):

```bash
npm install -g serve
serve -s build
```

- Usar o arquivo `site_library/backend/server.js` (se quiser um servidor Node simples). Ajuste caminhos se necessário para apontar para a pasta `build`:

```js
// Exemplo: ajustar server.js para servir build/index.html e arquivos estáticos
// join(__dirname, '..', 'build', filePath)
```

## Integração com o backend

O backend está em: https://github.com/starzlocker/library_backend

- Garanta que o backend esteja rodando e acessível (ex: `http://localhost:3000`).
- Configure a URL base das requisições no frontend (variáveis de ambiente):

Para Vite, crie um arquivo `.env` na raiz do `site_library` com:

```env
VITE_API_URL=http://localhost:3000
```

Para Create React App:

```env
REACT_APP_API_URL=http://localhost:3000
```

No código do frontend use essa variável ao fazer requests:

```js
const API = import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL || 'http://localhost:3000';
fetch(`${API}/books`)
```
---

Backend: https://github.com/starzlocker/library_backend

