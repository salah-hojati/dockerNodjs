عالیه، بریم مرحله به مرحله و دقیق با هم یک پروژه React + Vite با JavaScript بسازیم و فقط با Docker اجرا و توسعه بدیم، بدون اینکه Node.js روی سیستم نصب باشه.

🎯 هدف نهایی:
پروژه Vite React رو خارج از کانتینر بسازیم

فقط اجرا و توسعه (hot reload) با Docker انجام بشه

✅ مرحله ۱: ساختار اولیه
یک پوشه جدید بساز برای پروژه‌ت:

bash
Copy
Edit
mkdir my-vite-react
cd my-vite-react
پوشه app/ رو داخلش بساز، که قراره پروژه Vite React داخلش قرار بگیره:

bash
Copy
Edit
mkdir app
الان ساختار باید بشه:

perl
Copy
Edit
my-vite-react/
└── app/
✅ مرحله ۲: ساخت پروژه Vite React با JavaScript (روی سیستم)
الان باید پروژه React رو با npm create vite@latest بسازی. چون نمی‌خوای Node روی سیستم نصب کنی، از کانتینر موقت Docker برای این کار استفاده می‌کنیم:

bash
Copy
Edit
docker run -it --rm -v ${PWD}/app:/app -w /app node:20-alpine sh
این دستور:

یک کانتینر موقت از Node.js می‌سازه

پوشه app/ رو به داخل /app bind می‌کنه

وارد sh می‌شه که بتونی دستور بزنی

داخل اون شل، این دستور رو بزن:

sh
Copy
Edit
npm create vite@latest . -- --template react
بعد از چند ثانیه، سوالاتی می‌پرسه (همه رو Enter بزن)، بعد:

sh
Copy
Edit
npm install
سپس تایپ کن:

sh
Copy
Edit
exit
حالا پروژه Vite React داخل پوشه app/ ساخته شده.

✅ مرحله ۳: نوشتن Dockerfile
در پوشه‌ی اصلی (my-vite-react/) یک فایل Dockerfile بساز و بنویس:

Dockerfile
Copy
Edit
FROM node:20-alpine

WORKDIR /app

COPY app/ .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
✅ مرحله ۴: نوشتن docker-compose.yml
در همون پوشه، فایل docker-compose.yml:

yaml
Copy
Edit
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
✅ مرحله ۵: اجرای پروژه
برگرد به ترمینال، مطمئن شو تو پوشه my-vite-react هستی، بعد بزن:


بعد از چند ثانیه، Vite dev server راه می‌افته.

✅ مرحله ۶: تست در مرورگر
باز کن:

👉 http://localhost:5173

صفحه پیش‌فرض Vite React با JavaScript رو می‌بینی.

✅ مرحله ۷: تست Hot Reload
یک فایل توی app/src/App.jsx رو باز کن و مثلاً این خط:

jsx
Copy
Edit
<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
رو تغییر بده.

بلافاصله تغییر در مرورگر بدون رفرش اعمال می‌شه 🔥