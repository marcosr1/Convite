"use client";

import { motion } from "framer-motion";
import { Mountain, MapPin, Clock, Calendar, Volume2, FeatherIcon, HandshakeIcon, HandCoinsIcon, AlertOctagonIcon, BackpackIcon } from "lucide-react";
import { useRef, useState } from "react";

export default function ConviteHike() {
  const nextSectionRef = useRef(null);
  const mapa = useRef(null);
  const ref = useRef(null);
  const [audioOn, setAudioOn] = useState(false);

  function toggleAudio() {
    const audio = document.getElementById("ambient-audio");
    if (!audio) return;

    if (audioOn) {
      audio.pause();
    } else {
      audio.play();
    }
    setAudioOn(!audioOn);
  }

  function startExperience() {
    const audio = document.getElementById("ambient-audio");
    if (audio) {
      audio.volume = 0.2;
      audio.play();
      setAudioOn(true);
    }

    nextSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function startMapa() {
    mapa.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }


  return (
    <main ref={ref} className="relative min-h-[200vh] overflow-hidden bg-gradient-to-b from-sky-300 via-emerald-300 to-emerald-600">
      {/* Áudio Ambiente */}
      <audio id="ambient-audio" loop >
        <source src="/NOVO.mp3" type="audio/mpeg" />
      </audio>

      {/* Botão de som */}
      <button
        onClick={toggleAudio}
        className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-lg p-3 rounded-full shadow-lg">
        <Volume2 className={audioOn ? "text-emerald-700" : "text-gray-500"} />
      </button>

      <section className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <motion.button
          onClick={startExperience}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-4 bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl px-10 py-12 text-emerald-900 hover:bg-emerald-100">
          <Mountain size={72} className="text-emerald-800" />
          <span className="text-2xl font-bold">Entrar na trilha</span>
          <span className="text-sm opacity-80">Toque para iniciar a experiência</span>
        </motion.button>
      </section>

      <section ref={nextSectionRef} className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl max-w-md w-full p-6 text-center"
        >
          <motion.div
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex justify-center mb-2"
          >
            <Mountain size={64} className="text-emerald-800" />
          </motion.div>

          <h1 className="text-3xl font-bold text-emerald-900 mb-2">Hike & Burger Day ⛰️🍔</h1>

          <p className="text-emerald-800 mb-4">Subir a montanha, acender o fogo e mandar um hambúrguer no topo. (Se tudo der certo né)</p>

          <div className="bg-emerald-900/90 text-white rounded-2xl p-4 space-y-2">
            <div className="flex items-center gap-2 justify-center"><Calendar size={18} />18 de Janeiro</div>
            <div className="flex items-center gap-2 justify-center"><Clock size={18} />Umas 15h ou 16h pra pegar o por do sal</div>
            <div className="flex items-center gap-2 justify-center"><MapPin size={18} />Serra da Onça</div>
            <div className="flex items-center gap-2 justify-center"><FeatherIcon size={18} />Que não achemos ela no caminho, amém</div> 
            <div className="flex items-center gap-2 justify-center"><HandshakeIcon size={18} />Nínguem vai ficar para trás</div> 
            <div className="flex items-center gap-2 justify-center"><HandCoinsIcon size={18} />Contribuição de 15 conto pra calabresa</div> 
            <div className="flex items-center gap-2 justify-center"><BackpackIcon size={18} />Levar Lanterna, comida e saúde mental.</div> 
          </div>

          <motion.button
            onClick={startMapa}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-emerald-600 to-lime-500 text-white font-semibold shadow-lg">
            Confirmar Presença 
          </motion.button>
        </motion.div>
      </section>

      {/* Google Maps */}
      <section ref={mapa} className="relative z-6 px-2 pt-22 pb-84">
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden">
          <iframe
            title="Mapa da trilha"
            src="https://www.google.com/maps?q=-5.505736,-42.629288&t=k&z=14&output=embed"
            className="w-full h-[640px] border-0"
            loading="lazy"
          />
        </div>
      </section>

      <section className="relative z-16 flex items-center justify-center pb-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl max-w-md w-full text-center">
          <motion.div
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex justify-center mb-2">
            <AlertOctagonIcon size={64} className="text-red-800 pt-2" />
          </motion.div>

          <p className="text-red-800 mb-4">Não compartilhe esse link com ninguem!!!</p>
        </motion.div>
      </section>

    </main>
  );
}
