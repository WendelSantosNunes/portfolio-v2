import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../view/pages/Home";
import { PageLayout } from "../view/layouts/PageLayout";

export function Router() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route element={<PageLayout />}>
                  <Route path="/" element={<Home />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}
