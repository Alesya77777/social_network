import { Suspense } from "react";
import React from "react";





// export const withSuspense = (Component) => {
//   return (props) => {
//     return (
//       <Suspense fallback={<div>Загрузка...</div>}>
//         <Component {...props} />
//       </Suspense>
//     )
//   }
// };




export const withSuspense = ({children}) => {
  return (props) => {
    return (
      <Suspense fallback={<div>Загрузка...</div>}>
        {children}
      </Suspense>
    )
  }
};
