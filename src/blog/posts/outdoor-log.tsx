import React, { useState } from 'react';
import { Box, ButtonBase, Collapse, Typography } from '@mui/material';
import rawEntries from './data/outdoor-changelog.json';

interface Entry {
  start: string;
  end?: string;
  title: string;
  description?: string;
  adventure?: boolean;
}

const monthName = (m: string) =>
  new Date(2000, Number(m) - 1).toLocaleDateString('en-US', { month: 'long' });

const dateLabel = ({ start, end }: Entry): string => {
  if (start.length === 7) return '';
  const day = (d: string) => Number(d.slice(8));
  let tail = '';
  if (end) {
    tail =
      start.slice(0, 7) === end.slice(0, 7)
        ? `-${day(end)}`
        : `-${new Date(`${end}T00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
  }
  return `${day(start)}${tail}`;
};

const years = new Map<string, Map<string, Entry[]>>();
for (const e of [...(rawEntries as Entry[])].sort((a, b) => b.start.localeCompare(a.start))) {
  const [year, m] = e.start.split('-');
  const months = years.get(year) ?? new Map<string, Entry[]>();
  const month = monthName(m);
  years.set(year, months.set(month, [...(months.get(month) ?? []), e]));
}
const newestYear = [...years.keys()][0];

// Timeline rail: a 40px gutter. The line sits at x = 10; the year chevron and
// every month dot are centred on it.
const GUTTER = '40px';

function DaysOutside(): React.JSX.Element {
  const [open, setOpen] = useState<Record<string, boolean>>({ [newestYear]: true });

  return (
    <Box sx={{ width: '100%', maxWidth: 700 }}>
      {[...years].map(([year, months]) => (
        <Box key={year} sx={{ mb: '36px' }}>
          <ButtonBase
            onClick={() => setOpen((o) => ({ ...o, [year]: !o[year] }))}
            aria-expanded={!!open[year]}
            disableRipple
            sx={{
              position: 'relative',
              width: '100%',
              height: 20,
              pl: GUTTER,
              justifyContent: 'flex-start',
            }}
          >
            <Box
              component="svg"
              aria-hidden
              viewBox="0 0 20 20"
              width={16}
              height={16}
              fill="none"
              sx={{
                position: 'absolute',
                left: '2.5px',
                top: '2px',
                color: open[year] ? 'primary.main' : 'text.secondary',
                transform: open[year] ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.15s',
              }}
            >
              <path
                d="M3.5 7l6.5 6.5L16.5 7"
                stroke="currentColor"
                strokeWidth={3.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Box>
            <Typography component="span" variant="h4" sx={{ fontWeight: 500 }}>
              {year}
            </Typography>
          </ButtonBase>

          <Collapse in={!!open[year]} timeout={400}>
            <Box
              sx={{
                position: 'relative',
                pt: '20px',
                pl: GUTTER,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                // The timeline line, fading out at the bottom.
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: '10px',
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  background: (t) => `linear-gradient(${t.palette.divider} 90%, transparent)`,
                },
              }}
            >
              {[...months].map(([month, items]) => (
                <Box
                  component="section"
                  key={month}
                  sx={{
                    position: 'relative',
                    // One dot per month, centred on the line.
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: '-34px',
                      top: '10px',
                      width: '9px',
                      height: '9px',
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      boxShadow: (t) => `0 0 0 6px ${t.palette.background.default}`,
                    },
                  }}
                >
                  <Typography component="h2" variant="h6" sx={{ fontWeight: 500, mb: '2px' }}>
                    {month}
                  </Typography>

                  <Box
                    component="ul"
                    sx={{ m: 0, p: 0, listStyle: 'none', display: 'grid', gap: '15px' }}
                  >
                    {items.map((e) => (
                      <Box
                        component="li"
                        key={`${e.start}-${e.title}`}
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: '45px minmax(0, 1fr)',
                          columnGap: '5px',
                          alignItems: 'baseline',
                        }}
                      >
                        <Typography
                          component="time"
                          dateTime={e.start}
                          sx={{
                            textAlign: 'center',
                            color: 'text.secondary',
                            bgcolor: e.adventure ? 'rgba(83, 91, 242, 0.2)' : 'transparent',
                            borderRadius: 1,
                            fontVariantNumeric: 'tabular-nums',
                          }}
                        >
                          {dateLabel(e)}
                        </Typography>
                        <Box sx={{ overflowWrap: 'anywhere' }}>
                          <Typography
                            sx={{
                              fontWeight: 500,
                              bgcolor: e.adventure ? 'rgba(83, 91, 242, 0.2)' : 'transparent',
                              borderRadius: 1,
                            }}
                          >
                            {e.title}
                          </Typography>
                          {e.description && (
                            <Typography
                              variant="body2"
                              sx={{ maxWidth: '100ch', color: 'text.secondary' }}
                            >
                              {e.description}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
}

export default {
  slug: 'outdoor-log',
  title: '🪵 Log of Days Out',
  date: '2026-10-14',
  description: 'yay to being outside',
  tags: ['outside'],
  content: <DaysOutside />,
};
