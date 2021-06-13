FROM node:lts-alpine
WORKDIR /usr/app/client

COPY package.json .
RUN npm install
COPY . /usr/app/client

EXPOSE 4200

CMD ["npm","run", "start-fe", "--", "--host", "0.0.0.0"]