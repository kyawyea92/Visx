import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkOutlineSharpIcon from '@mui/icons-material/WorkOutlineSharp';
import ConnectWithoutContactSharpIcon from '@mui/icons-material/ConnectWithoutContactSharp';
import EqualizerSharpIcon from '@mui/icons-material/EqualizerSharp';
const InfoDetails = ()=>{
    return(
        <Box className='mt-2.5 mx-6'>
            <Paper variant='outlined' className='py-3 my-3 border-y-2 border-t-rose-400'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography className='ml-2 text-rose-500'>Position</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className='w-full text-left tracking-wide text-rose-500'> <WorkOutlineSharpIcon/> Java Developer</Typography>
                </Grid>                 
            </Grid>
            </Paper>

            <Paper variant='outlined' className='py-3 my-3 shadow-inner shadow-indigo-500/50'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography className='ml-2'>Name</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className='w-full text-left tracking-wide'><AccountCircleIcon/> Lalisa Manobal</Typography>
                </Grid>                 
            </Grid>
            </Paper>
            <Paper variant='outlined' className='py-3  my-3 shadow-inner shadow-indigo-500/50'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography className='ml-2'>Date of Birth</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className='w-full text-left tracking-wide'><CalendarMonth/> 2020-May-31</Typography>
                </Grid>                 
            </Grid>
            </Paper>
            <Paper variant='outlined' className='py-3 my-3 shadow-inner shadow-indigo-500/50'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography className='ml-2'>Contact</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className='w-full text-left tracking-wide'><ConnectWithoutContactSharpIcon/>09234874**</Typography>
                </Grid>                 
            </Grid>
            </Paper>
            <Paper variant='outlined' className='py-3 my-3 shadow-inner shadow-indigo-500/50'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography className='ml-2'>Since</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className='w-full text-left tracking-wide'>
                    <Typography className='w-full text-left tracking-wide'><CalendarMonth/> 2O14</Typography>
                    </Typography>
                </Grid>                 
            </Grid>
            </Paper>
            <Paper variant='outlined' className='py-3 my-3 shadow-inner shadow-indigo-500/50'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography className='ml-2'>Hobby</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className='w-full text-left content-end tracking-wide'><EqualizerSharpIcon/> Java Dev</Typography>
                </Grid>                 
            </Grid>
            </Paper>
        </Box>
    );
}
export default InfoDetails;