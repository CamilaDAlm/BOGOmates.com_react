import React from "react";
import ReactGA from 'react-ga';

//export class gaEventsComponent extends React.Component

export function HandleClickGAEvents(newCategory,newAction){
   // console.log(props.newCategory)
    ReactGA.event({
        category: newCategory,
        action: newAction
    })
    
    
    }



