# Learning React From Basic to Advance

# Taking all the Notes Here

## Lecture 1:
### Why Learng React
1) Hype, Job Market, Trend, Build UI
2) React makes it easy to manage and build complex frontend

### When should you learn react
1) After mastering Javascript
2) Most projects doesen't need react in the initial phase

### why React was creater
1) Becuase of phantom message problem in facebook
2) State was managed by javascript and UI was managed my DOM and there was no sync between them so the team inside the facebook went to solve this problem and comes up with React.js
3) Initial users of React.js was khan Academy and unsplash

### Dont learn react if you don't know how javascript works and how DOM works

### React is a library
1) Difference between library and framework
2) Framework is like a military (very disciplined)
3) Library is like a cool dudes (gets things done in cool way)

### Topics to learn
1) core of react (state or UI manipulation, JSX)
2) component reusability
3) Reusing of components (props)
4) How to propogate changes (hooks)

### Additional Addons to React
1) Router (react doesen't have router, react-router-dom)
2) State Management (Redux, Redux-toolkit, Zustand, Context API)
3) Class Based component legacy code :-(
4) BaaS Apps (social media, e-commerce app, etc)

### After React
1) React is not a complete solution (No SEO, Browser render of JS, no routing)
2) Framework (Next.js, Gatsby, Remix)

## Lecture 2

### React New Documentation is [here](https://react.dev/)

### React is a core library
1) react-dom: it is use to make web apps
2) react-native: it is use to make mobile apps

#### npm: node package manager
#### npx: node package executor

### different ways to create a react app
1) npx create-react-app: old way (not recommended), time consuming and heavy
2) npm create vite@latest: latest way (recommended): fast as vite is french work for quick or fast

### Always open package.json first and try to understand it
1) there is a way to read the project
2) in the production build folder sereved to the user and not the react folder
3) create-react-app is not a good way so we will be using vite (pronounced as veet)
4) dev dependencies dont go to the production, we use it during delevelopement only
5) vite is lighter than CRA (create-react-app)
6) we are going to be inside of src folder almost always


### Visit vite [here](https://vitejs.dev/)

## Lecture 3
- whenever javascript runs it run alone we must include it into our html file using the script tag and there is not exception and this process of injection is known as "Hydration". React script do the hydration behind the scense. But vite does add the script tag directly in the index.html via which hydration happens

- all the dependencies reside inside the node_module folder and we dont push this repository into the github

- there are mainly two file in the src directory (if you use create-react app) index.js and App.js

- most of the things happens in the src and public folder

- there is only one page which gets displyaed to the user and it is index.html and this is why it is called SPA (Single Page Application)

- react creates it's own virtual DOM (using ReactDOM) and compare it with the Main DOM and change only updated nodes in the DOM tree (more on this when we learn about React Fiber)

### Follow these conventions while using react in vite
1) Component names must start with Uppercase later
2) use .jsx extension whenever you are returning jsx
3) function names must match with the file name including capitalization
4) jsx must be wrapped inside enclosing tag like (<></> fragment)