FROM node:alpine



WORKDIR /var/test/

COPY package.json /var/test/
RUN npm install --production

COPY index.js /var/test/

CMD [ "node", "./index.js" ]



