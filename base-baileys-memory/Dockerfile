FROM node:18.18

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN mkdir -p /app/bot_sessions
ARG COPY_SESSION=false
RUN if [ "$COPY_SESSION" = "true" ]; then \
    cp -r /app/saved_session/* /app/bot_sessions/; \
fi

EXPOSE 3000
CMD ["npm", "start"]
