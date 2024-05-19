import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import App from "./App";
import { Loading } from "./loadingimg";

 export const Template = ()=>{

    const [a, b] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            b(true);
        }, 4000);
    }, []);

    const kungfu_panda = createPortal(<div><App /></div>, document.querySelector('.t__ree'));

    return(<>
        { !a ? <Loading /> : kungfu_panda }
    </>)
};