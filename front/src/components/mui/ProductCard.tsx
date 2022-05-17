import Image                                from 'next/image';
/* eslint-disable import/prefer-default-export */
import * as React                           from 'react';
// import { defineMessage }                    from '@lingui/macro';
import FavoriteIcon                         from '@mui/icons-material/Favorite';
import ShareIcon                            from '@mui/icons-material/Share';
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
}                                           from '@mui/material';
import IconButton, { IconButtonProps }      from '@mui/material/IconButton';
import Typography                           from '@mui/material/Typography';
import { red }                              from '@mui/material/colors';
export function ProductCard({ title = '', 
subheader = '', productImageSrc, patented = true,
}) {
  return (
    <Card sx={{
      maxWidth: 345, margin: 1.5, position: 'relative',
    }}
    >
      <CardHeader
        avatar={(
<></>
          // (
          //   <Avatar sx={{ bgcolor: red[500], position: 'relative' }} aria-label="recipe">
          //     <Image alt="patented" src="/medias/logoARRIMAGE.jpg" layout="fill" />
          //   </Avatar>
          // )
        )}
        title={title}
        subheader={subheader}
        action={<div style={{position:'relative', marginTop:'4px', transform:'rotate(35deg)', width:'40px', height:'40px'}}>
        <Image src="/medias/products/label/patented.jpg" layout='fill' />
        </div>
        }
      />

      <Divider />
      <Image src={productImageSrc} height="200px" width="386px" alt={`product${title}`} layout="intrinsic" />
      {/* <Divider /> */}

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{display:'grid', padding:'0 5px 10px 5px', gridTemplateColumns:'1fr auto'}}>
        <div>

       {/* {
        [
          {src:"armyLabel.jpg", title:"labellisé Armée Francaise"},
          {src:"labelISO.jpg", title:"labellisé ISO 9001"},
          {src:"labelIsoo.jpg", title:"labellisé ISO 9002"},
      ]
      .map(({title, src})=> <Tooltip title={title} arrow>
        <IconButton sx={{ '&:hover':{transform:'scale(1.5)', zIndex:'5'}}} className={'labelButton'} aria-label="add to favorites" style={{width:'30px', height:'30px'}}>
          <Image alt="patented" src={"/medias/products/label/" + src} layout="fill" />
        </IconButton>
      </Tooltip>
      )
    }  */}
    </div>
      </CardActions>
    </Card>
  );
}
