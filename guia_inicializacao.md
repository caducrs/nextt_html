# Guia de Inicialização - Site Nextt

## Visão Geral

Este é um site estático moderno para a agência digital Nextt, desenvolvido com HTML, CSS e JavaScript puro. O site possui design responsivo com paleta de cores em vermelho (#E50914) e preto (#121212), e inclui todas as páginas essenciais para uma presença online profissional.

## Estrutura de Arquivos

```
nextt_html/
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── logo.png
│   ├── portfolio/
│   ├── blog/
│   └── team/
├── index.html
├── sobre.html
├── servicos.html
├── portfolio.html
├── blog.html
└── contato.html
```

## Páginas Incluídas

1. **Home (index.html)** - Página inicial com seções de introdução, serviços, estatísticas, depoimentos, CTA e blog
2. **Sobre (sobre.html)** - Página sobre a empresa, missão, visão, valores e equipe
3. **Serviços (servicos.html)** - Detalhes dos serviços oferecidos
4. **Portfólio (portfolio.html)** - Galeria de projetos com filtros por categoria
5. **Blog (blog.html)** - Lista de artigos do blog com barra lateral
6. **Contato (contato.html)** - Formulário de contato, informações e mapa

## Recursos e Funcionalidades

- Design responsivo para todos os dispositivos (desktop, tablet, mobile)
- Menu de navegação com toggle para dispositivos móveis
- Slider de depoimentos
- Filtros de portfólio
- Formulário de contato com validação
- Accordion para perguntas frequentes
- Animações ao scroll
- Rolagem suave para links âncora

## Como Iniciar

1. Descompacte o arquivo ZIP em seu servidor web ou computador local
2. Abra o arquivo `index.html` em qualquer navegador moderno para visualizar o site localmente
3. Para publicar online, faça upload de todos os arquivos para seu servidor web

## Personalização

### Alterando Cores

Para modificar a paleta de cores, edite as variáveis CSS no início do arquivo `css/style.css`:

```css
:root {
    --primary-color: #E50914; /* Vermelho principal */
    --secondary-color: #121212; /* Preto principal */
    --dark-gray: #333333;
    --light-gray: #f5f5f5;
    --white: #ffffff;
    --transition: all 0.3s ease;
}
```

### Alterando o Logo

Substitua o arquivo `images/logo.png` por seu próprio logo, mantendo o mesmo nome de arquivo.

### Adicionando Imagens

- Imagens de portfólio: Adicione suas imagens na pasta `images/portfolio/`
- Imagens do blog: Adicione suas imagens na pasta `images/blog/`
- Imagens da equipe: Adicione suas imagens na pasta `images/team/`

### Modificando Conteúdo

Edite os arquivos HTML para alterar textos, links e estrutura conforme necessário.

## Bibliotecas Externas

O site utiliza as seguintes bibliotecas externas (carregadas via CDN):

- **jQuery** - Para manipulação do DOM e suporte a plugins
- **Font Awesome** - Para ícones
- **Google Fonts** - Para as fontes Montserrat e Open Sans
- **Slick Slider** - Para o slider de depoimentos
- **Isotope** - Para os filtros de portfólio

## Compatibilidade

O site é compatível com os seguintes navegadores:
- Google Chrome (versão 60+)
- Mozilla Firefox (versão 60+)
- Safari (versão 12+)
- Microsoft Edge (versão 79+)
- Opera (versão 50+)

## Suporte

Para suporte ou dúvidas sobre o site, entre em contato através do email: contato@nextt.com.br
