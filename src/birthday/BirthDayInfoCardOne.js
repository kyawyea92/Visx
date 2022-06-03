import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { Text } from '@visx/text';
import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const skills = [
    { label: 'Attend', percent: 80, color: '#61dafb' },
    { label: 'Leave', percent: 20, color: '#E5530E' }
];
export default function BirthDayInfoCardOne(){
    const [active, setActive] = useState(null);
    const width = 200;
    const half = width / 2;
    return(
        <CardContent>
                        <Typography className='recordTypo'>Attendance</Typography>
                        <svg width={width} height={width}>
                            <Group top={half} left={half}>
                                <Pie
                                    data={skills}
                                    pieValue={(skill) => skill.percent}
                                    outerRadius={half}
                                    innerRadius={({ data }) => {
                                        return active && active.label == data.label ? half - 12 : half - 8;
                                    }}
                                    padAngle={0.02}
                                >
                                    {(pie) => {
                                        return pie.arcs.map(
                                            (arc) => {
                                                return (
                                                    <g key={arc.data.label} onMouseEnter={() => setActive(arc.data)}
                                                        onMouseLeave={() => setActive(null)}>
                                                        <path d={pie.path(arc)} fill={arc.data.color}></path>
                                                    </g>
                                                )
                                            }
                                        )
                                    }}
                                </Pie>
                                {active ?
                                    <>
                                        <Text textAnchor='middle' fontSize={20} dy={-10}>
                                            {`${active.percent}%`}
                                        </Text>
                                        <Text textAnchor='middle' fontSize={20} dy={10}>
                                            {`${active.label}`}
                                        </Text>
                                    </> 
                                    :
                                    <> 
                                       <Text textAnchor='middle' fontSize={20} dy={-10}>
                                            {`${skills.reduce((acc,data)=> acc + data.percent,0)}%`}
                                        </Text>
                                        <Text textAnchor='middle' dy={10}>
                                            {`All`}
                                        </Text>
                                    </>
                                }

                            </Group>

                        </svg>
                    </CardContent>
    );
}