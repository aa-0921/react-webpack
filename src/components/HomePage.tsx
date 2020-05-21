import * as React from "react";
import  { useState } from 'react';
import { ZeitBtn } from './ZeitBtn';
import { Text } from './Text';
import { ZeitToast } from './ZeitToast';
import { SiteImage } from './SiteImage';

export function HomePage() {
  const [text, setText] = useState('');

  return (
    <div>
      <h1>
        <Text text={text} />
        入力して下さい
      </h1>
      <ZeitBtn />
      <SiteImage />
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
