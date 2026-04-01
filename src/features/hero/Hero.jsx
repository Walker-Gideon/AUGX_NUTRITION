import { motion } from "motion/react";

import Main from "/src/ui/Main";
import Flex from "/src/ui/Flex";
import Image from "/src/ui/Image";
import Group from "/src/ui/Group";
import Container from "/src/ui/Container";
import HeroText from "./components/HeroText";

import augxHero from "/src/assets/augxHero.png";

export default function Hero() {
  return (
    <Container section="hero" classname={"relative w-full lg:min-h-screen bg-gradient-to-br from-white via-primary/10 to-primary flex flex-col justify-center overflow-hidden"}>
      <Main classname={"relative z-10 w-full px-4 md:px-10 lg:px-16 pt-32 md:pt-40 middle:pb-10 lg:pb-24"}>
        <Flex jsText="between" cText="center" classname={"flex-col lg:flex-row text-center lg:text-left gap-12"}>
          <HeroText />
          
          <Group classname={"relative w-full lg:w-1/2 flex items-center justify-center p-4"}>
            <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--color-primary)_0%,_transparent_70%)] opacity-40 z-0 pointer-events-none scale-[2]" />
            
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 w-full max-w-[400px] medium:max-w-[500px] middle:max-w-[600px] lg:max-w-none xl:max-w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            >
              <Image 
                source={augxHero} 
                alternate="AUGX Fitness Product" 
                classname="w-full h-auto object-contain" 
                priority={true}
              />
            </motion.div>
          </Group>
        </Flex>
      </Main>
    </Container>
  );
}