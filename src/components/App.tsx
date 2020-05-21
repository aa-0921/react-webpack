import * as React from "react";
// import  HomePage  from './HomePage';

// import './App.scss'
// import { ZeitProvider, CssBaseline } from '@zeit-ui/react'

// export function App() {
//   return(
//     <ZeitProvider>
//       <CssBaseline />
//       <HomePage />
//     </ZeitProvider>
//   )
// }

import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/friends' component={Friends} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)
function About(){
  return(
    <div>
      <h2>About</h2>
      <p>フレンズに投票するページです</p>
    </div>
  )
}
const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
)

export default App
