FROM node:lts-alpine
WORKDIR /usr/app/api

COPY package.json .
RUN npm install

COPY . /usr/app/api
EXPOSE 4200
CMD ["npm","run", "start-be"]