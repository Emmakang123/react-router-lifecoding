# React + Vite
- how to make react project with vite
1. npm create vite@latest . -- --template react
2. npm install
3. npm run dev (how to start server)

# Install React router dom 
1. npm install react-router-dom
cf https://reactrouter.com/6.28.0/start/tutorial

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# react router
### BrowserRouter  : 리액트 라우터의 도움을 받고싶은 컴포넌트의 최상위 컴포넌트를 감싸는 래퍼 컴포넌트.  \
    <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/contact'>Contact</a></li>
    </ul>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/topics' element={<Topics></Topics>}></Route>
    </Routes>
    a태그의 href 주소값과 route path 의 주소값 일치시키기
    