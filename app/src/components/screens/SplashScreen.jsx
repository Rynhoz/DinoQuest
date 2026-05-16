import { motion } from 'framer-motion';

export function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[99999] bg-gradient-to-br from-[#0e0a05] via-[#1a1006] to-[#0d0804] flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.72, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.3, 0.64, 1] }}
        className="flex flex-col items-center gap-4"
      >
        <img 
          src="https://res.cloudinary.com/ds4qnoypm/image/upload/v1772977904/file_00000000d13071f5a9a7f0b21686ed5d_rhymwv.png" 
          alt="DynoQuest Logo" 
          className="w-[140px] h-[140px] rounded-[28px] object-contain bg-white/5 shadow-[0_0_0_1px_rgba(201,152,42,0.18),0_12px_50px_rgba(0,0,0,0.7),0_0_60px_rgba(201,152,42,0.1)]"
        />
        <div className="text-center">
          <h1 className="font-cinzel text-3xl font-bold text-cream tracking-[0.1em] drop-shadow-[0_2px_24px_rgba(0,0,0,0.8)] shadow-gold/20">
            DynoQuest
          </h1>
          <p className="text-[0.68rem] text-gold/70 tracking-[0.22em] uppercase mt-[-0.3rem]">
            Tarija Discovery · Bolivia
          </p>
        </div>
        
        <div className="w-[120px] h-[2px] bg-gold/15 rounded-sm overflow-hidden mt-2">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-vine to-gold rounded-sm"
          />
        </div>
      </motion.div>
    </div>
  );
}
