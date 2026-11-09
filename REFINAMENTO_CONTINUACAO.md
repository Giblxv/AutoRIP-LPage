# Continuação do refinamento

## Alterações

- Links externos do WhatsApp agora usam `noopener noreferrer`.
- A política de referrer foi explicitada para reduzir vazamento de origem.
- O menu mobile tolera markup incompleto sem lançar exceções e mantém o foco acessível.
- O servidor passou a validar caminhos com `path.relative`, evitando falsos positivos por prefixo de diretório.
- URLs percent-encoded inválidas retornam `400 Bad request` em vez de causar exceção.
- Respostas de assets incluem `X-Content-Type-Options: nosniff`.
- Foi adicionado fallback opaco para navegadores sem `backdrop-filter`.

## Evidências

- `npm run build` concluído.
- `node --check server.js`, `build.js` e `script.js` concluídos.
- Header `X-Content-Type-Options: nosniff` confirmado por HTTP.
- Traversal fora da raiz e URL malformada retornam `400`.
- O manifesto de rotas continua respondendo corretamente.
- As duas capturas reais em `public/images` não foram alteradas.
