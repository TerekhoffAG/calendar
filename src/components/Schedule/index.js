import React, { useState } from 'react';
import EventItem from './EventItem';
import {Container, EventsGrid, EventsDay, TimeDay, TimeLine} from './style';


const MOCK_EVENTS_ARR = [[4], [4, 12], [4], [4, 7], [4, 9], [4, 0], [4]];
const START_WORK_TIME = 9;
const DAYS_WEEK = 7;
const WORK_TIME_LINE = 12;
const DAY_EVENTS = 13;

const Schedule = ({onClickEvent}) => {
    const [isReset, setReset] = useState(true)

    const checkDayEvent = (eventsArr, weekDay, dayEvent) => {
        return eventsArr[weekDay].includes(dayEvent);
    };

    const handleClickEvent = (e) => {
        const [weekDay, dayEvent] = e.target.getAttribute('id').split(',');

        if (checkDayEvent(MOCK_EVENTS_ARR, weekDay, Number(dayEvent))) {
            onClickEvent(true);
            setReset(false);
        } else {
            onClickEvent(false);
            setReset(true);
        }
    };

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
                    Array.from({length: DAYS_WEEK}, (item, index) => {
                        const weekDayIndex = index;
                        return <EventsDay key={index}>
                            {
                                Array.from({length: DAY_EVENTS}, (item, index) => {
                                    return <EventItem
                                                isEvent={checkDayEvent(MOCK_EVENTS_ARR, weekDayIndex, index)}
                                                key={index} 
                                                id={`${weekDayIndex},${index}`}
                                                handle={handleClickEvent}
                                                reset={isReset}
                                            />
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