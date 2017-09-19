FROM node:6-alpine
MAINTAINER NodeCraft

ENV REFRESHED_AT 2017-09-19
ENV NODE_ENV=production

COPY . /home/2fa-2-slack

EXPOSE 8888
WORKDIR /home/2fa-2-slack
CMD ["npm", "start"]