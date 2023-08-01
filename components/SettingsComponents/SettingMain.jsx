import { motion, AnimatePresence } from "framer-motion";

import ContactBtn from "../UI Component/ContactBtn";
import CoffeBtn from "../UI Component/CoffeBtn";
import SetEmpty from "../UI Component/SetEmpty";
import SetSample from "../UI Component/SetSample";
import TemplateSwitcher from "../UI Component/TemplateSwitcher";

const SettingMain = () => {
  return (
    <AnimatePresence>
      <motion.div layout className="cardStyle">
        <h1 className="text-2xl font-bold">Seu Currículo Pro Fácil e Rápido</h1>
        <div className="mt-5">
          <p>
              Bem-vindo ao nosso inovador serviço de criação de currículos em tempo real! <br />
             Sabemos o quão crucial é ter um currículo que destaque suas habilidades,
             experiências e potencial de maneira profissional e cativante.  <br />
            É por isso que estamos aqui para ajudá-lo a alcançar o sucesso em sua busca por oportunidades de carreira.
            <br /> Seu futuro brilhante começa agora. Vamos criar um currículo impressionante e fazer acontecer!
            
          </p>
          <div className="bg-sky-50 border-2 border-sky-700/50 px-2 mt-4 mb-2 pt-4 py-2 rounded-xl">
            <h1 className="text-sky-900 text-xl font-bold">Antes de começar</h1>
            <ol className="list-none mt-2 text-sky-900 space-y-2">
              <li>
              ● O botão <strong>Redefinir</strong> irá limpar todas as alterações que você fez e você não pode
                desfazê-los. O botão <strong> Preencher CV </strong>
                irá preencher os campos para ter uma melhor visualização.
              </li>
              <li>
                ● <strong>Temos três tipos de templates</strong> encontre o melhor pra você.
              </li>
              <li>
          
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex space-x-2 ">
            <SetEmpty />
            <SetSample />
          </div>
          <motion.div
            layout
            className="w-44 h-1 mx-auto mt-2 bg-gray-200 rounded-full"
          />
          <div className="flex space-x-2 mt-2">
            <ContactBtn />
          </div>
          <div className="mt-2">
            <CoffeBtn />
          </div>

          <div className="mt-5">
            <h1 className="text-xl font-bold">Templates</h1>
            <div className="flex flex-row space-x-4 mt-2">
              <TemplateSwitcher value={1} />
              <TemplateSwitcher value={2} />
              <TemplateSwitcher value={3} />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SettingMain;
