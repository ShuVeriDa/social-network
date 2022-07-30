
import React, {ComponentType} from "react";
import {Preloader} from "../Components/common/Preloader/Preloader";

type withAuthRedirectType = {

}

export const withAuthRedirect = (Component: ComponentType) => {
  return (props: withAuthRedirectType) => {
     return <React.Suspense fallback={<Preloader />} >
        <Component {...props} />
     </React.Suspense>
  }
};