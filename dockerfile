FROM node:10

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install -g yarn

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]