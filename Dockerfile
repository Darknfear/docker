FROM node:14
#create app directory
WORKDIR /app
COPY package.json /app
RUN npm install
#COPY /app
EXPOSE 3000
CMD ["node", "index.js"]


