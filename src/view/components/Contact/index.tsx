import { Input } from "../Input";
import { Button } from "../Button";

export function Contact() {
   return (
      <section className="mt-28 text-white px-4" id="secao4">
         <h2 className="text-4xl max-sm:text-3xl font-bold mb-16 text-center">
            Contato <span className="text-color-tertiary">.</span>
         </h2>

         <form className="flex flex-col gap-4 max-w-[608px] m-auto">
            <Input placeholder="Nome" name="text" />

            <Input type="email" placeholder="E-mail" name="email" />

            <textarea
               name="Mensagem"
               id="mensagem"
               cols={30}
               rows={10}
               className="bg-color-primary border-2  w-full rounded-lg px-3 pt-4 peer focus:border-color-tertiary transition-all outline-none"
               placeholder="Mensagem"
            ></textarea>

            <Button type="submit" className="m-2">
               Enviar
            </Button>
         </form>
      </section>
   );
}
