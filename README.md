NestJs Auth module with Jwt and password hashing

## Get started :
Go to src/app.module.ts and add your mongoDB Connection URL

## Needed Packages :

```bash

$ npm install --save @nestjs/passport passport passport-local

$ npm install --save-dev @types/passport-local

$ npm install --save @nestjs/jwt passport-jwt

$ npm install --save-dev @types/passport-jwt

$ npm install --save mongoose

$ npm install --save class-validator

$ npm install --save @nestjs/mongoose

$ npm install --save @nestjs/bcrypt

$ npm install --save class-transformer

```

## Endpoints :

1- Login : '/auth/login'
  - Request Body : { email, password }

2- Register : '/auth/register'
  - Request Body : { email, password,username}

3- Test auth access : '/auth/jwtTest'
  - Request Headers : { Authorization : Bearer + access_token }


Read more about Authentication <a href="https://docs.nestjs.com/security/authentication">Here</a>
