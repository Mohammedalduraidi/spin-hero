FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --force
COPY . .
ARG REACT_APP_MARVEL_BASE_URL
ARG REACT_APP_MARVEL_PUBLIC_KEY
ARG REACT_APP_MARVEL_PRIVATE_KEY

ENV REACT_APP_MARVEL_BASE_URL $REACT_APP_MARVEL_BASE_URL
ENV REACT_APP_MARVEL_PUBLIC_KEY $REACT_APP_MARVEL_PUBLIC_KEY
ENV REACT_APP_MARVEL_PRIVATE_KEY $REACT_APP_MARVEL_PRIVATE_KEY

RUN npm run build

FROM nginx
ADD nginx/default.conf /etc/nginx/templates/default.conf.template
COPY --from=builder /app/build /usr/share/nginx/html
