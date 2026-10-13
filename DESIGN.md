# Design system: 1-bit

O portfolio inteiro é desenhado como o retrato do logo: tinta preta sobre papel branco, sem cinza, sem meio tom. Tudo o que um design comum resolveria com cor ou cinza aqui é resolvido com peso, largura da fonte, padrão de pontos ou inversão.

## Conceito

**Fora da caixa.** A peça central é uma caixa desenhada com a cabeça do retrato saindo por cima da borda. A frase vira imagem. Dá para arrastar o retrato: ele resiste com elástico e volta para fora da caixa com mola. É o único momento ousado da página. O resto é quieto e disciplinado.

## Cor

Duas cores, nenhuma exceção. Não usamos opacidade para simular cinza no texto.

| Token          | Hex       | Uso                                          |
| -------------- | --------- | -------------------------------------------- |
| `--ink`        | `#000000` | texto, bordas, ícones, superfície invertida  |
| `--paper`      | `#ffffff` | fundo, texto sobre superfície invertida      |

Recursos para hierarquia sem cinza:

- **Inversão**: hover, foco e ação primária viram papel sobre tinta.
- **Retícula**: pontos pretos sobre branco (`--dither`) marcam o interior da caixa. É textura de 1 bit, não cinza.
- **Peso e largura**: o eixo `wdth` da Archivo separa títulos (condensado) de texto (normal).

## Tipografia

Uma família: **Archivo Variable** com eixos `wght` 100 a 900 e `wdth` 62 a 125.

| Token        | Tamanho       | Peso | Largura | Entrelinha | Tracking   | Uso                    |
| ------------ | ------------- | ---- | ------- | ---------- | ---------- | ---------------------- |
| `--t-display`| fluido        | 850  | 68%     | 0.86       | -0.02em    | nome                   |
| `--t-xl`     | 1.75rem       | 750  | 80%     | 1.0        | -0.015em   | domínios dos projetos  |
| `--t-lg`     | 1.1875rem     | 450  | 100%    | 1.4        | -0.005em   | bio                    |
| `--t-md`     | 1rem          | 400  | 100%    | 1.45       | 0          | descrições             |
| `--t-sm`     | 0.875rem      | 560  | 100%    | 1.35       | 0.01em     | rótulos de grupo       |

Regras: tracking negativo só em tamanhos grandes, rótulos em caixa baixa (sentence case), sem caixa alta, sem monoespaçada, sem travessão.

## Espaço e escala

- Base de 4px expressa em `rem`: `--s-1` 0.25rem até `--s-10` 4rem.
- **Mobile primeiro**: no celular `1rem = 16px` (respeita o tamanho de fonte do usuário) e a página rola.
- **Notebook e desktop** (`min-width: 1024px` em paisagem): o `rem` passa a ser derivado da viewport, `min(1.8vh, 0.92vw)`. Como todo o layout é escrito em `rem`, a mesma composição cabe inteira em 720p, 768p, 1080p, 2K e 4K sem rolagem.

## Bordas e superfícies

- Traço único: `--line` 2px de tinta. Nada de sombra.
- Raio: `--r-pill` só em botões e chips. A caixa do retrato e as linhas dos projetos são retas, porque são a "caixa".

## Layout

Mobile (uma coluna, alinhado à esquerda):

```
caixa + retrato
nome
bio
[ GitHub ] [in] [ig] [yt]
─────────────── linha do chão
projetos (janelas empilhadas, 2 colunas a partir de 40rem)
já desenvolvi para: Intelbras, ASUS
hoje: IMD, ITpS
formação: UFRN
```

Desktop (altura = viewport). Os projetos são os protagonistas: ocupam a faixa central inteira.

```
  (cabeça)
┌──────────┐  Marcosuel Filho                 bio
│ ░retrato░│                                  [GitHub] in ig yt
└──────────┴───────────────────────────────────────────── linha do chão
Projetos
┌ ▣ domínio ↗ ┐ ┌ ▣ domínio ↗ ┐ ┌ ▣ domínio ↗ ┐ ┌ ▣ domínio ↗ ┐
│   print     │ │   print     │ │   print     │ │   print     │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
descrição       descrição       descrição       descrição
──────────────────────────────────────────────────────────────
Já desenvolvi para   Hoje trabalho no   Formação
```

A caixa do retrato pousa sobre a linha do chão, que é a borda superior da seção de projetos.

## Janela de projeto

Cada projeto é uma janela de 1 bit inspirada no Mac clássico: moldura de 2px, barra de título com ícone Solar, domínio e seta.

- **Em repouso** a barra é lisa (janela inativa). Em telas com mouse o print aparece em escala de cinza, para respeitar as duas cores. No celular e no tablet (sem hover) o print já aparece colorido.
- **No hover ou foco** a barra ganha listras horizontais (janela ativa) e o print mostra as cores reais do produto.
- **No toque** a janela encolhe para 0.985.
- Prints: tela inicial em 1440×900, cortados em 16:9 a partir do topo, em `src/assets/projects/`. O Astro gera WebP responsivo.

## Movimento

- Um único momento na carga: o retrato sobe de dentro da caixa e sai por cima da borda.
- Arrastar o retrato: rastreio 1:1 com o ponto de pega, elástico progressivo, retorno com mola (amortecimento 0.75, resposta 0.45s) herdando a velocidade do gesto.
- Feedback no `pointerdown`: botões encolhem para 0.97 na hora.
- `prefers-reduced-motion`: sem subida, sem mola. O retrato fica parado.

## Ícones

[Solar](https://icon-sets.iconify.design/solar/) (variante `linear`) para toda a interface. Solar não tem marcas, então logos de GitHub, Instagram, YouTube, LinkedIn e ASUS vêm do Simple Icons, e o da Intelbras é o logotipo oficial. Todas as marcas são renderizadas em tinta preta.

## Texto

Curto, direto, voz ativa, sem travessão, sem jargão.
