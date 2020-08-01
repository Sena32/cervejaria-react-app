FROM node:lts-alpine

WORKDIR '/app'

#ENV PATH /app/node_modules/.bin:$PATH

#COPY public /app/public

#COPY src /app/src

COPY package.json .

COPY . .

RUN npm install



EXPOSE 3000

CMD [ "npm", "start" ]
#CMD ["/bin/sh"]