- first install nextjs, then
npm init
npm install typescript tsx @types/node --save-dev
npx tsc --init

npm install prisma @types/pg --save-dev
npm install @prisma/client @prisma/adapter-pg pg dotenv

- Update package.json to enable ESM:
package.json
```
{
  "type": "module"
}
```

npx prisma
npx prisma init --output ../generated/prisma
npx prisma migrate dev --name name_of_migration
npx prisma generate

### Now we are using next-auth for authentication, so we need to set it up, so copy paste the model in the schema.prisma, that is required for authentication: 
LINK: https://next-auth.js.org/v3/adapters/prisma
With PostgreSQL link: https://www.prisma.io/docs/prisma-orm/quickstart/prisma-postgres


