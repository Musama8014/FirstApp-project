FROM node:latest
WORKDIR /home/usama/Desktop/FirstApp-project/index.js
RUN npm install -g nodemon
COPY .  .
RUN npm install
EXPOSE 5500
CMD [ "npm" ,"run", "dev" ]