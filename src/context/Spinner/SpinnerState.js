
import SpinnerContext from "./SpinnerContext"
import { useState } from "react";

const SpinnerState = (props)=>{

  const [isLoading, setIsLoading] = useState(false);

    return(
        <SpinnerContext.Provider value={{isLoading, setIsLoading}}>
        {
            props.children
        }
    </SpinnerContext.Provider>
    )
}

export default SpinnerState;