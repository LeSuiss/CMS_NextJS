import { ExpandMoreRounded } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

type Props = {
  faqList: {
    question: string;
    answer: string;
  }[];
};

// dividers are created using pseudo element ":before"

export const FAQ = ({ faqList = [] }: Props) => {
  const faqListWithIndex = faqList.map((list, index) => ({
    ...list,
    index,
  }));
  const [expanded, setExpanded] = useState<number | undefined>();

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(typeof panel, isExpanded);
      setExpanded(panel === expanded && !isExpanded ? undefined : panel);
    };

  return (
    <Container disableGutters component={'section'} id="faq-accordion">
      {faqListWithIndex.map((faq) => (
        <Accordion
          key={faq.index}
          expanded={expanded === faq.index}
          onChange={handleChange(faq.index)}
        >
          <AccordionSummary
            sx={{ backgroundColor: 'whitesmoke' }}
            expandIcon={
              <ExpandMoreRounded style={{ color: 'hsl(14, 88%, 65%)' }} />
            }
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography id="answer">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};
