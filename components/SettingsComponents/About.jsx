import { BiImageAdd } from "react-icons/bi";
import { HiChevronRight } from "react-icons/hi";
import { BsPatchCheck } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { CvContext } from "../../hooks/CvContext";
import Inputs from "../UI Component/Inputs";
import TextArea from "../UI Component/Textarea";
import CheckBox from "../UI Component/Checkbox";

const About = () => {
  const { cv, uploadImage } = useContext(CvContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AnimatePresence initial={false}>
      <motion.div
        layout
        className="cardStyle"
        animate={{ marginBottom: isOpen ? "30px" : "20px" }}
      >
        <motion.div
          initial={false}
          onClick={() => setIsOpen(isOpen ? false : true)}
          layout
          className="w-full flex text-neutral-500 cursor-pointer text-lg"
        >
          <span className="flex-1">Informações pessoais</span>
          <motion.div
            className="inline-block items-end"
            animate={{ rotate: isOpen ? 90 : 0 }}
          >
            <HiChevronRight className="inline w-6 h-6" />
          </motion.div>
        </motion.div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: {
                  opacity: 1,
                  height: "auto",
                },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <CheckBox
                title="Display da Imagem"
                value={cv.displayImage}
                keyChange="displayImage"
              />

              {cv.displayImage ? (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <label
                    htmlFor="dropzone"
                    className="flex mt-1 flex-col justify-center items-center w-full py-8 bg-white border-2 border-gray-300 border-dashed cursor-pointer  rounded-xl"
                  >
                    <div className="flex flex-col items-center">
                      {cv.image ? (
                        <BsPatchCheck className="h-10 w-10 text-emerald-600" />
                      ) : (
                        <BiImageAdd className="h-10 w-10 text-rose-500" />
                      )}
                      <p className="text-gray-500 mt-3">
                        Clique aqui para fazer Uploud da sua imagem
                      </p>

                      <p className="text-sm text-gray-400">( *.jpg, *.png )</p>
                    </div>
                    <input
                      id="dropzone"
                      type="file"
                      accept="image/jpeg, image/png"
                      className="hidden"
                      onChange={uploadImage}
                    />
                  </label>
                </motion.div>
              ) : null}

              <Inputs
                title="Nome e Sobrenome"
                value={cv.name}
                placeholder="Seu nome"
                keyChange="name"
              />
              <Inputs
                title="Trabalho"
                value={cv.jobTitle}
                placeholder="Qual é seu trabalho?"
                keyChange="jobTitle"
              />
              <Inputs
                title="Localização"
                value={cv.location}
                placeholder="Onde você mora?"
                keyChange="location"
              />
              <TextArea
                title="Sobre"
                value={cv.about}
                placeholder="Fale um pouco sobre você"
                keyChange="about"
              />

              <motion.p
                layout
                className="projectAndExperienceTitle mt-5 text-lg"
              >
                Redes Sociais
              </motion.p>
              <motion.div layout className="flex flex-wrap">
                <CheckBox
                  title="Email"
                  value={cv.displayMail}
                  keyChange="displayMail"
                />
                <CheckBox
                  title="Portifólio"
                  value={cv.displayWebSite}
                  keyChange="displayWebSite"
                />
                <CheckBox
                  title="Github"
                  value={cv.displayGithub}
                  keyChange="displayGithub"
                />
                <CheckBox
                  title="Twitter"
                  value={cv.displayTwitter}
                  keyChange="displayTwitter"
                />
                <CheckBox
                  title="LinkedIn"
                  value={cv.displayLinkedIn}
                  keyChange="displayLinkedIn"
                />
                <CheckBox
                  title="Instagram"
                  value={cv.displayInstagram}
                  keyChange="displayInstagram"
                />
                <CheckBox
                  title="Facebook"
                  value={cv.displayFacebook}
                  keyChange="displayFacebook"
                />
              </motion.div>
              {cv.displayMail ? (
                <Inputs
                  title="Mail"
                  value={cv.email}
                  placeholder="example@mail.com"
                  keyChange="email"
                />
              ) : null}

              {cv.displayWebSite ? (
                <Inputs
                  title="Portfolio"
                  value={cv.website}
                  placeholder="Cole o link aqui sem o ' https:// '"
                  keyChange="website"
                />
              ) : null}

              {cv.displayGithub ? (
                <Inputs
                  title="Github"
                  value={cv.github}
                  placeholder="Somente o nome de usuário"
                  keyChange="github"
                />
              ) : null}

              {cv.displayTwitter ? (
                <Inputs
                  title="Twitter"
                  value={cv.twitter}
                  placeholder="Somente o nome do usuário sem o @"
                  keyChange="twitter"
                />
              ) : null}
              {cv.displayLinkedIn ? (
                <Inputs
                  title="LinkedIn"
                  value={cv.LinkedIn}
                  placeholder="Somente o nome do usuário"
                  keyChange="linkedIn"
                />
              ) : null}
              {cv.displayInstagram ? (
                <Inputs
                  title="Instagram"
                  value={cv.Instagram}
                  placeholder="Somente o nome do usuário"
                  keyChange="instagram"
                />
              ) : null}
              {cv.displayFacebook ? (
                <Inputs
                  title="Facebook"
                  value={cv.Facebook}
                  placeholder="Somente o nome do usuário"
                  keyChange="facebook"
                />
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
