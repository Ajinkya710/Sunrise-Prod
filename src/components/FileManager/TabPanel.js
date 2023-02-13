import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            display="flex"
            {...other}
        >
            {value === index && children}
        </Box>
    );
}