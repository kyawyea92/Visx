import { Typography } from '@mui/material';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
export default function BirthDayInfo() {
    return (
        <Container>
            <Paper elevation={3}>
                <Grid container >
                    <Grid item xs={4}>
                        <Typography>Name</Typography>
                        <Typography>Name</Typography>
                        <Typography>Name</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                            <Input 
                                id="standard-adornment-amount"
                                value=""
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}