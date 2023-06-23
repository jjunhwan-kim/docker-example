FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY public ./public/
COPY src ./src/
RUN npm run build

FROM nginx:1.23.4-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

COPY --from=build /app/build /app

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
