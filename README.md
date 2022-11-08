This is a NextJs Template of CMC Global DE2 

## Getting Started

Build and start services:

```bash
docker-compose up
```

SSH into app service

```bash
docker-compose exec app sh
```

Initialize @prisma/client

```bash
npx prisma generate
```

Migrate database

```bash
npx prisma migrate dev
```

Seed database

```bash
npx prisma db seed
```

Exit current service

```bash
exit
```

Restart services

```bash
docker-compose stop 
docker-compose up
```

Open [http://localhost:3002](http://localhost:3002) with the browser to see the result.

Database is ready at DATABASE_URL="mysql://root:cmcglobalde2@mariadb:3306/database_name"
<!--- you should update any dependencies in DATABASE_URL above when you change them inside .env file -->


