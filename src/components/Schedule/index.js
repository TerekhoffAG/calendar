import React from 'react';
import {Container, EventsGrid, EventsDay, TimeDay, TimeLine, EventItem} from './style';


const mockEventsArr = [[4], [4, 12], [4], [4, 7], [4, 9], [4, 0], [4]];
const START_WORK_TIME = 9;
const DAY_IN_WEEK = 7;
const WORK_TIME_LINE = 12;
const EVENTS_IN_DAY = 13;

const Schedule = () => {
    return(
        <Container>
            <TimeLine>
                {
                    Array.from({length: WORK_TIME_LINE}, (item, index) => {
                        const workTime = index + START_WORK_TIME;
                        return  <TimeDay key={index}>
                            {`${workTime < 10 ? 0 : ''}${workTime}:00`}
                        </TimeDay>
                    })
                }
            </TimeLine>
            <EventsGrid>
                {
                    Array.from({length: DAY_IN_WEEK}, (item, index) => {
                        const dayInWeeKIndex = index;
                        return <EventsDay key={index}>
                            {
                                Array.from({length: EVENTS_IN_DAY}, (item, index) => {
                                    return <EventItem isEvent={mockEventsArr[dayInWeeKIndex].includes(index)} key={index}/>
                                })
                            }
                        </EventsDay>
                    })
                }
            </EventsGrid>
        </Container>
    )
}

export default Schedule;