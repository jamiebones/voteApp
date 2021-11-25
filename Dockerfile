FROM node:14

ENV METEOR_ALLOW_SUPERUSER=true
ENV ROOT_URL="http://localhost:3000"

RUN curl "https://install.meteor.com/" | sh && \
git clone https://github.com/jamiebones/voteApp && \
cd voteApp && meteor npm install 

