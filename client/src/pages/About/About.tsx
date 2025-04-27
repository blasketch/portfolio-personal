import { motion } from "framer-motion";
import perfilImg from "../../assets/images/foto_linkedin.jpg"; // 👈 IMPORTA la imagen bien

export default function AboutMe() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl"
      >
        <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
        <p className="text-lg text-gray-700 mb-6">
          ¡Hola! Soy un entusiasta de los datos, la tecnología y las buenas ideas.  
          Me gusta explorar datos, descubrir historias detrás de los números y crear soluciones que realmente aporten algo útil.  
          Trabajo con Python, SQL y machine learning, siempre con ganas de aprender más y de enfrentar nuevos retos.  
          Creo en el poder de los datos para cambiar las cosas, y estoy aquí para formar parte de ese cambio.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="rounded-full overflow-hidden shadow-lg w-40 h-40 mt-4"
      >
        <img
          src={perfilImg} 
          alt="Foto de perfil"
          className="object-cover w-full h-full"
        />
      </motion.div>
    </section>
  );
}