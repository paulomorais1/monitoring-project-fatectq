import React from "react";
import MonitorCard from '../components/MonitorCard'
const HomeContainer = ({monitors}) =>{
    console.log(monitors);
    return(
        <div>
            {monitors && monitors.map((monitors) => (<MonitorCard key = {monitors.id} monitors ={monitors}
        />
        ))}
        </div>
    );
};
       
export default HomeContainer;