FROM node:20-alpine

WORKDIR /app

# کپی فایل فشرده به کانتینر
COPY app.tar.gz .

# استخراج فایل‌ها به دایرکتوری project
RUN tar -xzf app.tar.gz -C  && \
    rm app.tar.gz

# تغییر مسیر به project
WORKDIR /app

# نصب وابستگی‌ها
RUN npm install

# باز کردن پورت Vite
EXPOSE 5173

# اجرای dev server
CMD ["npm", "run", "dev", "--", "--host"]








