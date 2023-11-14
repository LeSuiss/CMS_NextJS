import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import { COMPANY_COLORS } from '../../config/styles/styles';
import { ExpandMoreRounded } from '@mui/icons-material';

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
              <ExpandMoreRounded style={{ color: COMPANY_COLORS.main }} />
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
