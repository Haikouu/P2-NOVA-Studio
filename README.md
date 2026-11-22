
# NOVA Studio — Site Estático com Docker

## Sobre o projeto

O NOVA Studio é um site estático desenvolvido para a atividade P2 de Docker.

A página apresenta um estúdio fictício de design e tecnologia, com animações, projetos visuais e opção de alternar entre os temas claro e escuro.

O objetivo é disponibilizar o site por meio de um container Docker, utilizando o Nginx como servidor web.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Docker
- Nginx

## Como executar

É necessário ter o Docker instalado e em execução.

Abra o terminal na pasta do projeto, onde está localizado o Dockerfile.

### 1. Construir a imagem

```bash
docker build -t p2-nova-studio .
```

### 2. Executar o container

```bash
docker run -d --name p2-nova-studio -p 8080:80 p2-nova-studio
```

### 3. Verificar o container

```bash
docker ps
```

### 4. Abrir o site

Acesse no navegador:

http://localhost:8080

## Comandos adicionais

Parar o container:

```bash
docker stop p2-nova-studio
```

Iniciar novamente:

```bash
docker start p2-nova-studio
```

Remover o container após pará-lo:

```bash
docker rm p2-nova-studio
```

## Diferença entre imagem e container

A imagem Docker funciona como um modelo que contém os arquivos e as configurações necessárias para executar uma aplicação.

O container é criado a partir dessa imagem e permite executar a aplicação de forma isolada.

Neste trabalho, a imagem contém o Nginx e os arquivos do NOVA Studio. Quando o container é iniciado, o Nginx disponibiliza o site no navegador.

## Inteligência artificial

O ChatGPT, da OpenAI, foi utilizado como ferramenta de apoio no desenvolvimento do site, na configuração do Docker e na organização da documentação.

Os comandos e os testes foram executados no computador utilizado para desenvolver o trabalho.
