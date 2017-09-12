FROM node:6-alpine as base
WORKDIR /home/website
COPY package.json .
ENV NODE_ENV=production
RUN npm set progress=false && npm config set depth 0 & \
	npm install --only=production

FROM base as release
COPY --frame=base /home/website/node_modules ./node_modules
COPY . .
ENV REFRESHED_AT 2017-09-12
ENV NODE_ENV=production

COPY . /home/website
MAINTAINER NodeCraft
EXPOSE 8888
CMD ["npm", "run" "start"]