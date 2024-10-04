# Gym App

## Regras de negócio

- [ ] O usuário não deve poder se cadastrar com email duplicado;
- [ ] O usuário não pode fazer mais de um check-in no memos dia;
- [ ] O usuário não pode fazer check0in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validade até 20 minutos após criado;
- [ ] O check-in só pode ser validade por administradores;
- [ ] Academia só pode ser cadastrado por administradores;

## Requisitos funcionais

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível de autenticar;
- [ ] Deve ser possível obter um perfil de um usuário logado;
- [ ] Deve ser possível obter o numero de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma cacademia; 

## Requisitos não funcionais

- [ ] A senha do usuário precisa ser criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgresSql;
- [ ] Todas listas de dados precisam estar paginados com 20 itens por página;
- [ ] O usuário dever ser identificado por um JWT;
