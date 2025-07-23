FROM node:20-alpine

WORKDIR /app

# نصب vite project (تبدیل به پروژه کامل)
RUN npm create vite@latest . -- --template react

# نصب dependencyها
RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]





