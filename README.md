
# 📝 Blog Pessoal (blog-pessoal-nestjs)

![Capa do Projeto](https://img.shields.io/badge/Blog%20Pessoal-NestJS%20API-red?style=for-the-badge&logo=nestjs)

Projeto desenvolvido para prática de **NestJS, TypeScript, API REST e banco de dados** durante o Bootcamp de Desenvolvimento Full-Stack em JavaScript da Generation Brasil.

---

## 🧐 Sobre o projeto

O **Blog Pessoal** é uma aplicação backend completa construída com **NestJS**, conectada a um banco **MySQL** via **TypeORM**.

A API permite o gerenciamento de **Temas** e **Postagens**, além de relacionamento entre as entidades e operações completas de CRUD.

O objetivo do projeto é praticar arquitetura em camadas, validações, relacionamentos, consultas personalizadas e testes com Insomnia.

---

## 🎯 Principais objetivos

- Criar CRUD completo para **Postagens** e **Temas** 
- Aplicar relacionamento entre entidades (Tema ↔ Postagem)  
- Implementar buscas personalizadas (por título, descrição etc.)  
- Estruturar o projeto seguindo as regras do NestJS (modules, controllers, services)  
- Configurar banco relacional MySQL com TypeORM  
- Testar a API usando **Insomnia**  
- Tratar erros com **HttpException** e **HttpStatus**  

---

## 💻 Tecnologias utilizadas

![NestJS](https://img.shields.io/badge/NestJS-red?style=for-the-badge&logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js)
![TypeORM](https://img.shields.io/badge/TypeORM-orange?style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-00618A?style=for-the-badge&logo=mysql)
![Insomnia](https://img.shields.io/badge/Insomnia-4000BF?style=for-the-badge&logo=insomnia)

---

## 🗂️ Endpoints principais

### 🏷️ Temas
| Método | Rota | Descrição |
|--------|-------|------------|
| POST | `/temas` | Criar tema |
| GET | `/temas` | Listar temas |
| GET | `/temas/id/:id` | Buscar por ID |
| GET | `/temas/descricao/:descricao` | Buscar por descrição |
| PUT | `/temas` | Atualizar tema |
| DELETE | `/temas/:id` | Deletar tema |

---

### 📝 Postagens
| Método | Rota | Descrição |
|--------|-------|------------|
| POST | `/postagens` | Criar postagem |
| GET | `/postagens` | Listar todas |
| GET | `/postagens/id/:id` | Buscar por ID |
| GET | `/postagens/titulo/:titulo` | Buscar por título |
| PUT | `/postagens` | Atualizar postagem |
| DELETE | `/postagens/:id` | Deletar postagem |

---

## 🧪 Testes no Insomnia

Os testes incluem:

- Cadastro de Temas  
- Criação de Postagens  
- Consultas por título e descrição  
- Validações de relacionamento  
- Atualização e exclusão de registros  

> Use Body em JSON para POST e PUT.

---

## 🗃️ Estrutura do projeto (NestJS)

src/
├── postagens/
│ ├── controllers/
│ ├── entities/
│ ├── services/
├── temas/
│ ├── controllers/
│ ├── entities/
│ ├── services/
├── app.module.ts
└── main.ts

---

## 📦 Instalação e execução

```bash
# Instalar dependências
npm install

# Rodar o projeto
npm run start:dev



