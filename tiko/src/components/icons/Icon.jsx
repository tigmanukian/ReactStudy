import Box from '@mui/material/Box';
import { createSvgIcon } from '@mui/material/utils';

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);

export default function Icon() {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
      
      <HomeIcon color="primary" />
    </Box>
  );
}