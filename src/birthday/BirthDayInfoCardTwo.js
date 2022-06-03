import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { Text } from '@visx/text';
import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const skills = [
    { label: 'Java', percent: 60, color: '#D23DF6' },
    { label: 'Php', percent: 40, color: '#1DF9DE' }
];
export default function BirthDayInfoCardTwo(){
    const [active, setActive] = useState(null);
    const width = 200;
    const half = width / 2;
    return(
        <CardContent>
                        <Typography className='recordTypo'>Programming Skills</Typography>
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