FROM node:12

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install
RUN npm run build

COPY . /usr/src/app

EXPOSE 3000
CMD npm start