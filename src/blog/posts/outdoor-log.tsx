import React, { useState } from 'react';
import { Box, ButtonBase, Collapse, Typography } from '@mui/material';
import rawEntries from './data/outdoor-changelog.json';

interface Entry {
  start: string;
  end?: string;
  title: string;
  description?: string;
}
interface MonthGroup {
  month: string;
  entries: Entry[];
}
interface YearGroup {
  year: string;
  months: MonthGroup[];
}

const entries = rawEntries as Entry[];

const monthName = (m: string): string =>
  new Date(2000, Number(m) - 1, 1).toLocaleDateString('en-US', { month: 'long' });

const dateLabel = ({ start, end }: Entry): string | null => {
  if (start.length === 7) return null;
  const day = (d: string) => Number(d.slice(8));
  if (!end) return `${day(start)}`;
  if (start.slice(0, 7) === end.slice(0, 7)) return `${day(start)}–${day(end)}`;
  const endShort = new Date(`${end}T00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
  return `${day(start)} – ${endShort}`;
};

const years: YearGroup[] = [];
for (const e of [...entries].sort((a, b) => b.start.localeCompare(a.start))) {
  const [y, m] = e.start.split('-');
  let year = years[years.length - 1];
  if (year?.year !== y) {
    year = { year: y, months: [] };
    years.push(year);
  }
  let month = year.months[year.months.length - 1];
  const name = monthName(m);
  if (month?.month !== name) {
    month = { month: name, entries: [] };
    year.months.push(month);
  }
  month.entries.push(e);
}

// --- Timeline geometry (px) ---------------------------------------------
// The rail is a 40px gutter on the left. The line sits at x = 10, the year
// chevron is centred on it, and each month dot is centred on it.

const GUTTER = '40px';

const ChangelogView = ({
  open,
  toggle,
}: {
  open: Record<string, boolean>;
  toggle: (year: string) => void;
}) => (
  <Box
    sx={{
      width: { xs: '100%', md: '700px' },
      maxWidth: '100%',
      minWidth: 0,
      flexShrink: 0,
      display: 'block',
    }}
  >
    {years.map(({ year, months }) => {
      const isOpen = !!open[year];
      return (
        <Box key={year} sx={{ mb: '36px', width: '100%', minWidth: 0 }}>
          <ButtonBase
            onClick={() => toggle(year)}
            aria-expanded={isOpen}
            disableRipple
            sx={{
              position: 'relative',
              height: 40,
              pl: GUTTER,
              width: '100%',
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
                top: '12px',
                color: isOpen ? 'primary.main' : 'text.secondary',
                transform: isOpen ? 'rotate(180deg)' : 'none',
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

          <Collapse
            in={isOpen}
            timeout={0}
            sx={{
              width: { xs: '100%', md: '700px' },
              maxWidth: '100%',
              '& .MuiCollapse-wrapper': { width: '100%' },
              '& .MuiCollapse-wrapperInner': { width: '100%' },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                pt: '20px',
                pl: GUTTER,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '100%',
                minWidth: 0,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: '10px',
                  top: '-9px',
                  bottom: 0,
                  width: '1px',
                  background: (t) =>
                    `linear-gradient(to bottom, ${t.palette.divider} 90%, transparent)`,
                },
              }}
            >
              {months.map(({ month, entries: items }) => (
                <Box
                  component="section"
                  key={month}
                  sx={{
                    position: 'relative',
                    width: '100%',
                    minWidth: 0,
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
                    sx={{
                      m: 0,
                      p: 0,
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '15px',
                      width: '100%',
                      minWidth: 0,
                    }}
                  >
                    {items.map((e) => {
                      const label = dateLabel(e);
                      return (
                        <Box
                          component="li"
                          key={`${e.start}-${e.title}`}
                          sx={{
                            display: 'grid',
                            gridTemplateColumns: '56px minmax(0, 1fr)',
                            alignItems: 'baseline',
                            columnGap: '5px',
                            width: '100%',
                            minWidth: 0,
                          }}
                        >
                          <Box sx={{ width: 56, flexShrink: 0 }}>
                            {label && (
                              <Typography
                                component="time"
                                dateTime={e.start}
                                sx={{
                                  display: 'block',
                                  color: 'text.secondary',
                                  fontVariantNumeric: 'tabular-nums',
                                }}
                              >
                                {label}:
                              </Typography>
                            )}
                          </Box>
                          <Box sx={{ minWidth: 0, width: '100%' }}>
                            <Typography sx={{ fontWeight: 500, wordBreak: 'break-word' }}>
                              {e.title}
                            </Typography>
                            {e.description && (
                              <Typography
                                variant="body2"
                                sx={{
                                  maxWidth: '52ch',
                                  color: 'text.secondary',
                                  wordBreak: 'break-word',
                                  overflowWrap: 'anywhere',
                                }}
                              >
                                {e.description}
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              ))}
            </Box>
          </Collapse>
        </Box>
      );
    })}
  </Box>
);

function DaysOutside(): React.JSX.Element {
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    years.length ? { [years[0].year]: true } : {},
  );
  const toggle = (year: string) => setOpen((o) => ({ ...o, [year]: !o[year] }));

  return <ChangelogView open={open} toggle={toggle} />;
}

const content = <DaysOutside />;

export default {
  slug: 'outdoor-log',
  title: 'Log of Days Out',
  date: '2026-10-14',
  description: 'yay to being outside',
  tags: ['outside'],
  content,
};
