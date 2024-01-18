# upload-cloudflare

STACKS: Node.js, Fastify, Prisma, Cloudflare R2

## REQUISITOS
 ### Requisitos funcionais (RFs)
 - [ ] Deve ser possível fazer uploads;
 - [ ] Deve ser possível visualizar os últimos 5 uploads realizados

 ### Requisitos funcionais (RNs)
 - [ ] Os Uploads devem ser removidos automaticamente após 7 dias;
 - [ ] Só deve ser possível visualizar uploads não expirados;
 - [ ] Só deve ser possível realizar upload de arquivos seguros;
 - [ ] Só deve ser possível fazer upload de arquivos até 1gb cada

 ### Requisitos Não Funcionais (RNFs)
 - [ ] A utilização do Cloudflare R2 para upload de arquivos;
 - [ ] O Upload deve ser feito diretamente pelo front usando Presigned URLs;
 - [ ] Os Links para o compartilhamento devem ser assinados evitando acesso público (autenticação)

## ANOTAÇÕES IMPORTANTES
 ### Mime Types

 ```ts
 const bannedMimeTypes = [
    '.exe', //EXECUTÁVEL
    '.ddl', //BIBLIOTECAS DINÂMICAS
    '.bat', //ARQUIVOS DE LOTE
    '.cmd', //ARQUIVOS DE COMANDO
    '.sh', //ARQUIVOS DE SHELL
    '.cgi', //ARQUIVOS DE CGI
    '.jar', //ARQUIVOS JAVA
    '.app' //ARQUIVOS macOS
 ]
 ```
