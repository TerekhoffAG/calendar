import React, { useState } from 'react';
import { Event } from './style';

const EventItem = (props) => {
    let {reset} = props;
    const [isActive, setActive] = useState(false);

    const handleClickEventItem = (e) => {
        setActive(true);
        props.handle(e);
    }

    return <Event 
                onClick={handleClickEventItem}
                isActive={isActive && !reset}
                {...props}
            />
}

export default EventItem;