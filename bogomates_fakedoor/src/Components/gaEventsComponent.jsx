
import ReactGA from 'react-ga';

//export class gaEventsComponent extends React.Component

export function HandleClickGAEvents(newCategory,newAction){
   // console.log(props.newCategory)
    ReactGA.event({
        category: newCategory,
        action: newAction
    })
    
    
    }

export const sendOutbound = (event) => {
    event.preventDefault();
    ReactGA.event({
     category: 'Schedule',
     action: 'bookmarksClick',
     label: 'bookmarks'
   });
}

export const initGA = (trackingID) => {           
    ReactGA.initialize(trackingID); 
 }
 

export const PageView = () => {  
    ReactGA.pageview(window.location.pathname +  
                     window.location.search); 
}

/**
 * Event - Add custom tracking event.
 * @param {string} category 
 * @param {string} action 
 * @param {string} label 
 */
export const Event = (category, action) => {
    ReactGA.event({
      category: category,
      action: action,
    });
  };



