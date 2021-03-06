import * as React from 'react'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  styled,
  useTheme,
} from '@mui/material'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export default function FilteringMenuAccordeon({
  filteringStructure,
  setFilters,
}) {
  const [level1Open, setLevel1Open] = React.useState(
    Object.keys(filteringStructure).map((k) => ({ [k]: true }))
  )
  // const [expanded, setExpanded] = React.useState(filteringStructure)
  const theme = useTheme()

  return (
    <div style={{ minWidth: '65%', maxHeight: '80vh', overflowY: 'auto' }}>
      {/* {JSON.stringify(expanded)} */}
      {Object?.entries(filteringStructure).map(([category, values], index) => (
        <Accordion
          key={category + index}
          sx={{ width: '100%' }}
          expanded={level1Open[category] ?? true}
          onChange={() =>
            setLevel1Open((prevS) => ({
              ...prevS,
              [category]: !prevS[category],
            }))
          }
        >
          <AccordionSummary
            sx={{
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.primary.contrastText,
              '& svg': { color: theme.palette.primary.contrastText },
            }}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>{category}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {Object.keys(values).map((x) => (
                <FormControlLabel
                  key={'formControlLabel' + x}
                  control={<Checkbox defaultChecked />}
                  onChange={() =>
                    setFilters((p) => {
                      const xx = { ...p }
                      xx[category][x] = !xx[category][x]
                      return xx
                    })
                  }
                  label={x}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
