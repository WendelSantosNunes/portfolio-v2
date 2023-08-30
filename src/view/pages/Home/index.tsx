import { About } from "../../components/About";
import { Knowledge } from "../../components/Knowledge";
import { Presentation } from "../../components/Presentation";
import { Experience } from "../../components/Experience";

export function Home() {
   return (
      <main className="max-w-tela w-full h-full m-auto">
         <Presentation />
         <About />
         <Knowledge />
         <Experience />
      </main>
   );
}
