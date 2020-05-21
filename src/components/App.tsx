// import React from 'react'

// export default function App() {
//   return (
//     <div className="reactApp">
//         HELLO React
//     </div>
//   )
// }
import React from 'react';
import  { useState } from 'react';
import * as ReactDOM from 'react-dom';
// import './App.scss'
import { Button } from '@zeit-ui/react'
// import { Image } from '@zeit-ui/react'
import { useToasts } from '@zeit-ui/react'
import { ZeitProvider, CssBaseline } from '@zeit-ui/react'

interface Props {
  text: string,
}


// ReactDOM.render(<App />, document.getElementById('root'));

function ZeitBtn() {
  return <Button>Click MeClick MeClick MeClick Me</Button>;
}

// function SiteImage() {
//   return <Image width="540" height="160"
//     src="http://www.deelay.me/2000/https://react.zeit-ui.co/images/custom-domains.png" />;
// }

function Text(props: Props) {
  return <div style={{ color: 'green' }}>{props.text}</div>;
}


function ZeitToast() {
  const [toasts, setToast] = useToasts()
  const click = () => setToast({ text: 'The Evil Rabbit jumped over the fence.' })
  return <Button onClick={click}>Show Toast</Button>
}






function HomePage() {
  const [text, setText] = useState('');

  return (
    <div>
      <h1>
        <Text text={text} />
        入力して下さい
      </h1>
      <ZeitBtn />
      {/* <SiteImage /> */}
      <ZeitToast />
      <input
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}
// ReactDOM.render(<HomePage />, document.getElementById('root'));
export default function App() {
  return(
    <ZeitProvider>
      <CssBaseline />
      <HomePage />
    </ZeitProvider>
  )
}


// export const Index = () => {
//   return <div>name</div>;
// };
// ReactDOM.render(<Index />, document.getElementById('index'));

// import { Button } from '@zeit-ui/react'

// export const MyComponent = () => <Button>Click Me</Button>
// ReactDOM.render(<MyComponent />, document.getElementById('button'));
