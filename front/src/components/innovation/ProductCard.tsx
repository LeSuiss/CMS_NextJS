import * as React from 'react';

// import { defineMessage }                    from '@lingui/macro';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';

import Image from 'next/image';

interface Props {
  title: string;
  subheader?: string;
  productImageSrc?: string;
  labels?: {
    fileName: string;
    labelTitle: string;
  }[];
}

export function ProductCard({
  title = '',
  subheader = '',
  productImageSrc,
  labels = [
    { fileName: 'patented.jpg', labelTitle: 'patented' },
    { fileName: 'armyLabel.jpg', labelTitle: 'labellisé Armée Francaise' },
    { fileName: 'labelISO.jpg', labelTitle: 'labellisé ISO 9001' },
    { fileName: 'labelIsoo.jpg', labelTitle: 'labellisé ISO 9002' },
  ],
}: Props) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: '345px',
        maxHeight: '400px',
        position: 'relative',
      }}
    >
      <CardHeader
        avatar={<></>}
        sx={{ backgroundColor: '#f3f3f3' }}
        title={title}
        titleTypographyProps={{ fontWeight: 600 }}
        subheader={subheader}
        action={
          <Tooltip title={'download notice'} arrow placement="right">
            <a href="tel: 01882461290" style={{ padding: '10px 5px' }}>
              <Image alt="pdfLogo" src="/pdf.svg" width={30} height={30} />
            </a>
          </Tooltip>
        }
      />
      <Divider
        sx={{
          border: 'none',
          boxShadow: `0px 1.5px 1px 1.5px ${theme.palette.primary.main} `,
        }}
      />

      <div style={{ position: 'relative' }}>
        <CardContent sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <div
            style={{
              display: 'flex',
              margin: '0px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                padding: 'min(5%, 10px)',
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'center',
                backgroundColor: 'white',
              }}
            >
              {labels.map(({ labelTitle, fileName }) => (
                <Tooltip
                  key={'label_' + labelTitle}
                  title={labelTitle}
                  arrow
                  placement="right"
                >
                  <div style={{ padding: '4px' }} aria-label="add to favorites">
                    <Image
                      alt="patented"
                      src={'/medias/products/label/' + fileName}
                      height="40px"
                      width="40px"
                      objectFit="contain"
                    />
                  </div>
                </Tooltip>
              ))}
            </div>
            {!!productImageSrc && productImageSrc !== 'undefined' && (
              <Image
                src={productImageSrc}
                height="200px"
                width="386px"
                alt={`product${title}`}
                objectFit="contain"
              />
            )}
          </div>

          <Typography
            variant="body2"
            color="text.secondary"
            style={{ padding: '15px 5px 0 5px' }}
          >
            {title}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
