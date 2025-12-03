"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Technology from "./technology/technology";
import Digital from "./digital/digital";
import Branding from "./branding/branding";

export default function ParallaxScroll() {
  const { scrollY } = useScroll();

  // Create different parallax offsets per section
  const techY = useTransform(scrollY, [0, 400], [0, -100]);
  const digitalY = useTransform(scrollY, [400, 900], [0, -150]);
  const brandingY = useTransform(scrollY, [900, 1500], [0, -200]);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      
      {/* Section 1 - Technology */}
      <motion.div style={{ y: techY }} className="snap-start h-screen flex items-center justify-center">
        <Technology />
        
      </motion.div>

      {/* Section 2 - Digital */}
      <motion.div style={{ y: digitalY }} className="snap-start h-screen flex items-center justify-center">
        <Digital />
      </motion.div>

      {/* Section 3 - Branding */}
      <motion.div style={{ y: brandingY }} className="snap-start h-screen flex items-center justify-center">
        <Branding />
      </motion.div>

    </div>
  );
}
