import { certificatesAll } from "../../../data/certificates";

export function Certificates() {
   return (
      <section className="mt-28 text-white px-4" id="secao4">
         <h2 className="text-4xl max-sm:text-3xl font-bold mb-16">
            Certificados <span className="text-color-tertiary">.</span>
         </h2>
         <div className="grid gap-4 grid-cols-3 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
            {certificatesAll &&
               certificatesAll.map((item, index) => {
                  return (
                     <a
                        href={item.link ? item.link : "#"}
                        target={item.link ? "_blank" : ""}
                     >
                        <img
                           src={item.img}
                           alt="Laborátorio de Pesquisas Avançadas em Análises de Dados"
                           className="max-w-[272px] h-48 m-auto rounded-lg"
                           key={index}
                        />
                     </a>
                  );
               })}
         </div>
      </section>
   );
}
