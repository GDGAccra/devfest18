# use latest Node LTS (Carbon)
FROM node:carbon

# install Angular CLI
RUN npm install -g @angular/cli@6.2.4

# install Firebase CLI
RUN npm install -g firebase-tools
