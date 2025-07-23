 یک‌بار پروژه 

Vite React

رو بساز داخل سیستم (نه داخل Docker):


    cd app
    npm create vite@latest . -- --template react
    npm install
سپس فقط اجرا و توسعه رو با Docker انجام بده.

Dockerfile برای اجرای پروژه:


      FROM node:20-alpine

      WORKDIR /app

      COPY app/ .

      RUN npm install

      EXPOSE 5173

      CMD ["npm", "run", "dev", "--", "--host"]
docker-compose.yml با volumes:

      version: "3.8"

      services:
      vite-react:
      build: .
      ports:
      - "5173:5173"
      volumes:
      - ./app:/app
      - /app/node_modules
      working_dir: /app