FROM node:10-alpine
LABEL maintainer="Ryan Albon <ryanalbon@gmail.com>"
EXPOSE 8080

RUN ["addgroup", "-S", "api"]
RUN ["adduser", "-S", "-D", "-h", "/home/api", "-G", "api", "api"]

USER api
WORKDIR /home/api

COPY --chown=api:api ./package.json ./package-lock.json ./
RUN ["npm", "install", "--only=prod"]
COPY --chown=api:api ./ ./

ENTRYPOINT ["/usr/local/bin/node"]
CMD ["/home/api/bin/www"]
