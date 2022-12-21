FROM node:lts-slim as build

WORKDIR /

ARG CROWDIN_PERSONAL_TOKEN

COPY ./ .

RUN yarn config set registry https://registry.npm.taobao.org --global
RUN yarn install && \
    # yarn crowdin:sync && \
    yarn build

FROM nginx:stable-alpine as deploy

# Copy what we've installed/built from production
COPY --from=build /build /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
