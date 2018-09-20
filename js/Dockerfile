FROM node:8

RUN mkdir /usr/app

WORKDIR /usr/app

COPY app.js package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production
COPY . .

CMD [ "node", "app.js" ]




### docker build -t arq_js
### docker run -p 8080:8000 arq_js