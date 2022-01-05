import React, { useEffect, useState } from 'react';
import './App.css';
import { Link, Text } from 'office-ui-fabric-react';

function handleClickOnLink(ev: React.MouseEvent<unknown>) {
  window.alert('clicked on Link component which is rendered as html button');
}

function App() {
  const [link, setLink] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setLink('http://google.com')
    }, 10000);
  }, []);
  return (
    <div className="App">
    <div>
      <Text>
        When a link has an href,{' '}
        <Link href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link" underline>
          it renders as an anchor tag.
        </Link>{' '}
        Without an href,{' '}
        <Link onClick={handleClickOnLink} underline>
          the link is rendered as a button
        </Link>
        . You can also use the disabled attribute to create a{' '}
        <Link disabled href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link" underline>
          disabled link.
        </Link>
      </Text>
      <Text>
        It's not recommended to use Links with imgs because Links are meant to render textual inline content. Buttons
        are inline-block or in the case of imgs, block. However, it is possible to create a linked image button by
        making a button with an unstyled variant and adding the img content and href source to that.
      </Text>
      <a href="https://google.com">Text link</a>
      <Link role="link" target="_blank" underline aria-label="hello there" href={link}>Hello link</Link>
    </div>
    </div>
  );
}

export default App;
