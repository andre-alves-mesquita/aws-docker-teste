<div align="center">
<img src="Docker-Logo.png" width="300" >
</div>
<br>
<div align="center">
 <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Docker-v26.1.1-2496ED?style=plano&logo=docker"> 
 <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Node-v20.11.1-5FA04E?style=plano&logo=nodedotjs"> 
 <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Express-v4.19.2-000000?style=plano&logo=express">
 <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Laravel-v11-FF2D20?style=plano&logo=laravel"> 
 <img alt="Made by tgmarinho" src="https://img.shields.io/badge/MySql-v8-4479A1?style=plano&logo=mysql"> 
 <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Nginx-v1.25.5-009639?style=plano&logo=nginx"> 
 <img alt="Made by tgmarinho" src="https://img.shields.io/badge/React-v18.3.1-61DAFB?style=plano&logo=react"> 
 <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Composer-v2.7.6-885630?style=plano&logo=composer"> 

 
<div>
<br>
<p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#prerequisitos">Pré-requisitos</a> • 
 <a href="#instalacao">Instalação</a> • 
 <a href="#Tecnologias">Tecnologias</a> •  
 <a href="#Autor">Autor</a>
</p>

<h1 align="center" id="objetivo">Exemplo sistema Full Stack Dockerizado</h1>

<h4 align="center"> 
	🚧  Projeto Docker 🚀 em construção...  🚧 
</h4>
<h5>
Projeto utilizado para levantar um projeto docker já funcional com Laravel, Express e React com banco de dados integrado em todos os projetos
</h5>

<div align="left" id="prerequisitos">

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Docker](https://www.docker.com/)
[Composer](https://getcomposer.org/)

</div>

<div align="left" id="instalacao">

### 🎲 Instalando o projeto
```bash
# Clone este repositório
$ git clone https://github.com/andre-alves-mesquita/aws-docker-teste.git

# Entre da pasta do projeto
$ cd aws-docker-teste

# Entre da pasta backend, fronted e instale as dependencias do Express e React
$ npm install

# Crie também o arquivo .env no backend com as seguintes informações
$ BACK_DB_DATABASE=
$ BACK_DB_USER=
$ BACK_DB_PASS=
$ BACK_DB_DIALECT=
$ BACK_DB_HOST=
$ BACK_DB_PORT=

# Crie também o arquivo .env na raiz do projeto
$ DB_ROOT_PASSWORD=
$ DB_DATABASE=
$ DB_USER=
$ DB_PASSWORD=
$ DB_PORT=
$ DB_DIALECT=

# Entre da pasta laravel e instale as dependencias do Laravel
$ composer install

# Execute o projeto
$ docker compose up -d --build

# Execute o projeto
$ docker compose exec php php artisan migrate

```

</div>

<div id="Tecnologias" align="left">

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Docker](https://www.docker.com/)
</div>

<div id="Autor" align="left">

### Autor
---

<a href="https://andre-alves-mesquita.github.io/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/47260233?s=400&u=e7dca57b5e53b7a7e8fba51f1e0b5049dbcf20dd&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>André A Mesquita</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago//" title="Rocketseat">🚀</a>


Feito com ❤️ por André A Mesquita 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-André%20A%20Mesquita-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andre-alves-mesquita-dev-php/)](https://www.linkedin.com/in/andre-alves-mesquita-dev-php/) 
[![Gmail Badge](https://img.shields.io/badge/-andre20mesquita@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:andre20mesquita@gmail.com)](mailto:andre20mesquita@gmail.com)

</div>
