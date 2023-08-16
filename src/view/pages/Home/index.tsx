import { About } from "../../components/About";
import { Presentation } from "../../components/Presentation";

export function Home() {
   return (
      <div className="max-w-tela w-full h-full m-auto">
         <Presentation />
         <About />
      </div>
   );
}
