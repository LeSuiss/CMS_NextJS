import Image                           from 'next/image';
/* eslint-disable import/prefer-default-export */
import * as React                      from 'react';
// import { defineMessage }                    from '@lingui/macro';
import FavoriteIcon                    from '@mui/icons-material/Favorite';
import ShareIcon                       from '@mui/icons-material/Share';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Tooltip,
} from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography                      from '@mui/material/Typography';
import { red }                         from '@mui/material/colors';
'@mui/material/colors';
export function ProductCard({ title = '',
  subheader = '', productImageSrc, patented = true,
}) {
  return (
    <Card sx={{
      maxWidth: 345, margin: 1.5, position: 'relative',
    }}
    >
      <CardHeader
        // avatar={(<></> )}
        title={title}
        subheader={subheader}
        action={<div style={{ position: 'relative', marginTop: '4px', transform: 'rotate(35deg)', width: '40px', height: '40px' }}>
          <Image src="/medias/products/label/patented.jpg" height="30px" width="30px" />
        </div>
        }
      />
      <Divider />

      <div style={{ position: 'relative' }}>
        <div style={{ padding: "4px", position: 'absolute', top: '0px', left: '0px', zIndex: "99", borderRight: 'lightGrey solid 1px', borderBottom: 'lightGrey solid 1px', backgroundColor: 'white' }}>
          {
            [
              { src: "armyLabel.jpg", title: "labellisé Armée Francaise" },
              { src: "labelISO.jpg", title: "labellisé ISO 9001" },
              { src: "labelIsoo.jpg", title: "labellisé ISO 9002" },
            ]
              .map(({ title, src }) => <Tooltip title={title} arrow placement='right'>
                <div className={'labelButton'} aria-label="add to favorites" style={{ transform: 'translateX:100%' }}>
                  <Image alt="patented" src={"/medias/products/label/" + src} height="30px" width="30px" />
                </div>
              </Tooltip>
              )
          }
        </div>
        {
          !!productImageSrc && productImageSrc !== 'undefined' && <Image src={productImageSrc} height="200px" width="386px" alt={`product${title}`} layout="intrinsic" />
        }
        {/* <Divider /> */}

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
      </div>
      <CardActions disableSpacing sx={{ display: 'grid', padding: '0 5px 10px 5px', gridTemplateColumns: '1fr auto' }}>
        <div>


        </div>
      </CardActions>
    </Card>
  );
}
