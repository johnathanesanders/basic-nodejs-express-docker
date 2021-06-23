FROM node:alpine
WORKDIR /usr/app
RUN apk update && apk add libstdc++ && apk add build-base && apk add python3 && apk add bash
COPY . .
RUN npm install 
COPY . .
#EXPOSE 8800
CMD ["npm", "run", "start:prod"]