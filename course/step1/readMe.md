before build docker  run this command.
cd course/step1/app
step 1

        npm create vite@latest 
or
        npm create vite@latest . -- --template react
step 2 

    ◆  Select a variant:
     ○ TypeScript
     ○ TypeScript + SWC
     ● JavaScript
     ○ JavaScript + SWC
     ○ React Router v7 ↗
     ○ TanStack Router ↗
     ○ RedwoodSDK ↗
     ○ RSC ↗


step 3
in docker not need 

        npm install
        npm run dev
step 4 
   for first time

     docker-compose up --build

docker-compose up 

step 5

open page address:
http://localhost:5173


step 6

##  <p dir="rtl" style="text-align: right;"> فایل  vite.config.js    را تغییر دهید</p>
       
        import { useState } from 'react'
        import reactLogo from './assets/react.svg'
        import viteLogo from '/vite.svg'
        import './App.css'

        function App() {
        const [count, setCount] = useState(0)

        return (
        <>
        <div>
        <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
        </button>
        <p>
        Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        </div>
        <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        </p>
        </>
        )
        }




<p dir="rtl" style="text-align: right;">🧹 7. توقف پروژه</p>

<p dir="rtl" style="text-align: right;">برای توقف کانتینرها از:</p>

bash
docker-compose down
     
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        























