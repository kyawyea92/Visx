
import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
const skills = [
    { name: 'Leader', value: '80', full: '100' },
    { name: 'Communication', value: '100', full: '100' },
    { name: 'Japanese', value: '20', full: '100' },
    { name: 'English', value: '40', full: '100' }
];
export default function SocialSkills() {
    const [active, setActive] = useState(null);
    const width = 200;
    const half = width / 2;
    return (
        <CardContent>
            <Typography className='recordTypo'>Social Skills</Typography>
            <Grid container>
                {skills.map((skill) => {
                    return (

                        <Grid item xs={5} className = 'mx-2 my-3'>
                            <Typography className='text-3xl'>{skill.value}/{skill.full}</Typography>
                            <Typography >{skill.name}</Typography>
                            <LinearProgress variant='determinate' value={skill.value} className='bg-cyan-300'/>
                        </Grid>

                    );
                })}
               
            </Grid>
        </CardContent>
    );
}