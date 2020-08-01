FROM node:10

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY public /app/public

COPY src /app/src

COPY package.json /app/package.json

RUN yarn

EXPOSE 3000

#CMD [ "yarn", "start" ]
CMD ["/bin/sh"]