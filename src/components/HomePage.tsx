import * as React from "react";
// import  { useState } from 'react';
// import { ZeitBtn } from './ZeitBtn';
// import { Text } from './Text';
// import { ZeitToast } from './ZeitToast';
// import { SiteImage } from './SiteImage';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const HomePage = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/friends' component={Friends} />
    </div>
  </BrowserRouter>
)
export default HomePage


const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
)
const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
)

//   const [text, setText] = useState('');

//   return (
//     <div>
//       <h1>
//         <Text text={text} />
//         入力して下さい
//       </h1>
//       <ZeitBtn />
//       <SiteImage />
//       <ZeitToast />
//       <input
//         type="text"
//         value={text}
//         onChange={e => {
//           setText(e.target.value);
//         }}
//       />
//     </div>
//   );
// }
