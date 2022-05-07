import preloader from "../../../assets/images/preloader.png";
import React from "react";

type PreloaderType = {

}

export const Preloader = (props: PreloaderType) => {
   return (
      <>
         <div style={{backgroundColor: 'white'}}>
            <img src={preloader}/>
         </div>
      </>
   );
};