FROM node:10

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY public /app/public

COPY src /app/src

COPY package.json /app/package.json

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
#CMD ["/bin/sh"]