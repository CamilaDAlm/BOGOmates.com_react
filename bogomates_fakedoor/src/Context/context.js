import React, { useState } from "react";

export const Context = React.createContext(0);
export const ContextProvider = ({ children }) => {
	const [count,setCount] = useState(0);
	function setCountClick(){
        setCount(count+1);
        
    }
   // console.log("Clicks in context:"+count);

    function setInitCount(newCount){
        setCount(newCount);
    }

    const [page,setPage] = useState(0);
	function setPageTag(tag){
        setPage(tag)
    }

	return (
		<Context.Provider value={{ count,setCountClick,setInitCount,page,setPageTag}}>
			{children}
		</Context.Provider>
	);
};