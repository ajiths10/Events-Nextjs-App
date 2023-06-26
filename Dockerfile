FROM node:20-alpine3.16

WORKDIR /usr/src/app

COPY . .

RUN npm install -g npm

RUN npm install 

RUN npm run build 

EXPOSE 3000

CMD ["npm","run","start" ]
