FROM node:17-alpine3.14

WORKDIR /app

COPY ./package*.json ./

RUN npm i

# RUN mkdir -p node_modules
RUN chmod -R 777 node_modules

RUN mkdir -p .next
RUN chmod -R 777 .next

COPY . .

EXPOSE 3000

# CMD [ "npm", "run", "dev" ]
