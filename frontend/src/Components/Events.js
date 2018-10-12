import React from "react";
// import { testData } from "../TestData.js";
import { Event } from "./Event.js";

const Events = props => {
    return (
        <div class="events">
            {fetch("http://localhost:3001//all-events")
                .then(res => res.json())
                .then(testData => {
                    testData.map(function(event) {
                        return (
                            <Event
                                name={event.lesson}
                                description={event.description}
                                date={event.date}
                                // floaters={event.floaters.map(function(floater) {
                                //     return (
                                //         <ul>
                                //             <li>
                                //                 {floater.firstName + " " + floater.surname}
                                //             </li>
                                //         </ul>
                                //     );
                                // })}
                            />
                        );
                    });
                })}
        </div>
    );
};

export { Events };
