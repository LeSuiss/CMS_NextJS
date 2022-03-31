/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/media-has-caption */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ReactPlayer from 'react-player';
import Copyright from '../Copyright';
import Link from '../Link';
import ProTip from '../ProTip';

export default function About() {
  React.useEffect(() => {
    let youtube = document.getElementById('yourYoutubeFrame');
    youtube = youtube?.contentWindow;
    if (youtube) {
      youtube.oncontextmenu = function (e) {
        e.preventDefault();
        console.log('Blocked!');
      };
    }
  }, []);

  return (
    <>
      xxx
      <video autoPlay style={{ width: '500px', height: '500px', border: 'solid 5px red' }}>
        <source src="https://youtu.be/A7449EIxUqs" />
      </video>
      aaa
      <iframe src="https://www.youtube.com/embed/cWDJoK8zw58" />

      <ReactPlayer
        url="https://youtu.be/A7449EIxUqs"
        playing
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              showinfo: 0,
              iv_load_policy: 3,
              nologo: 1,
            },
          },
        }}
      />
    </>
  );
}
