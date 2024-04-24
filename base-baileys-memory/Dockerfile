
FROM node:18.18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN mkdir -p /app/bot_sessions
RUN cp -r /app/saved_session/* /app/bot_sessions/
EXPOSE 3000
CMD ["npm", "start"]