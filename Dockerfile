FROM ubuntu:20.04

WORKDIR /app/

COPY package.json /app/

CMD [ "/bin/bash" ]

RUN apt-get update && \
    apt-get -y install curl tzdata

ENV TZ="Asia/Jakarta"

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update && \
    apt-get -y install nodejs default-jre-headless

RUN npm install

ENV PATH=/app:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

RUN apt-get -y autoclean && \
    apt-get -y autoremove
