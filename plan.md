# Plano — Landing page comercial AutoRIP

## Objetivo

Criar uma página estática, rápida e responsiva para apresentar o AutoRIP a gráficas e profissionais de DTF/DTF UV e levar visitantes a uma conversa comercial no WhatsApp `55 11 95333-6229`. A página não terá checkout nem preço inventado; a conversão será uma conversa de demonstração ou compra.

## Direção visual

Três direções consideradas:

- **Editorial de pré-impressão** (0,06): tipografia expressiva, papel técnico e anotações de produção.
- **Signal amber industrial** (0,03): fundo grafite, amarelo de marca, cyan de interface e composição assimétrica inspirada em painéis de máquina.
- **Minimal whiteboard** (0,08): fundo claro, diagramas e cartões de leitura simples.

Escolha: **Signal amber industrial**.

### Movimento e princípios

A interface combina a precisão de uma ficha técnica com a energia de uma bancada de produção. O conteúdo aparece em faixas diagonais, com uma linha de sinal que conduz o olhar dos benefícios ao CTA. A página deve parecer operacional, confiável e direta, sem estética de promessa exagerada.

### Cores

Grafite quase preto para representar o ambiente de produção; amarelo AutoRIP para ação e marcação de prioridade; cyan para estados técnicos; branco quente para leitura. O amarelo é a cor proprietária e aparece em CTAs, números de etapa e detalhes de foco.

### Tipografia

Usar `Space Grotesk` para títulos e `Inter` para textos, com fallback local. Títulos curtos, grandes e compactos; corpo com largura controlada para leitura em celular. Rótulos técnicos em caixa alta e espaçamento ampliado.

### Elementos de assinatura

1. Uma faixa vertical de sinal com o texto `DTF / DTF UV`.
2. Um diagrama de pipeline com pontos de controle e estados `entrada`, `processamento`, `saída`.
3. Botões WhatsApp em amarelo com mensagens pré-preenchidas distintas.

### Voz da marca

Clara, técnica e comercial sem exagero. Exemplos: “Menos improviso entre a arte e a produção.” e “Veja o AutoRIP trabalhando no seu fluxo.”

### Marca

Wordmark `AutoRIP` com o `RIP` em amarelo e um pequeno marcador circular que remete a um ponto de registro. Personalidade: preciso, direto, confiável.

## Implementação

- `index.html`: página única, SEO, Open Graph, conteúdo comercial, FAQ e CTAs.
- `styles.css`: layout responsivo, tokens visuais, animações suaves e foco visível.
- `script.js`: ano dinâmico, menu móvel, acordeão FAQ e links WhatsApp com mensagens.
- `public/manus-routes.json`: rota principal declarada para o Preview.
- `public/robots.txt` e `public/sitemap.xml`: base de descoberta.
- `server.js`: servidor estático de Preview/produção local na porta `3000`.
- `build.js`: copia os arquivos estáticos para `dist/`.

Não haverá banco, login ou backend. Os links de contato usarão somente o número fornecido pelo usuário e não armazenarão dados do visitante.
