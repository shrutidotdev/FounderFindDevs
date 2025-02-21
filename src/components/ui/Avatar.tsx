import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Avatar {
  imageUrl: string;
  profileUrl: string;
}

interface AvatarCircleProps {
  avatar: Avatar;
  index: number;
}

const AvatarCircle = ({ avatar, index }: AvatarCircleProps) => {
  return (
    <motion.a
      href={avatar.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.6,
        transition: { type: "spring", stiffness: 200, damping: 10 }
      }}
      className="relative h-10 w-10 md:h-[3rem] md:w-[3rem] md:rounded-full rounded-full overflow-hidden border-2 border-white/20 bg-white/5 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-rose-500/10" />
      <Image
        className="relative object-cover z-0"
        src={avatar.imageUrl}
        alt={`Avatar ${index + 1}`}
        width={96}  // Increased for better scaling quality
        height={96}
        quality={100} // Force maximum quality
        priority={index < 3} // Load first 3 images with priority
      />
      <div className="absolute inset-0 rounded-full ring-1 ring-white/20" />
    </motion.a>
  );
};

interface AvatarCountProps {
  numPeople: number;
}

const AvatarCount = ({ numPeople }: AvatarCountProps) => {
  return (
<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.3,
    delay: 0,
    ease: [0.215, 0.61, 0.355, 1],
  }}
  whileHover={{ 
    scale: 1.1,
    rotate: 5,
    background: 'rgba(255, 255, 255, 0.1)',
    transition: { 
      duration: 0.4,
      ease: [0.165, 0.84, 0.44, 1],
    }
  }}
  whileTap={{ scale: 0.95 }}
  className="relative flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm"
>
  <motion.div 
    className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-rose-500/20"
    whileHover={{ opacity: 0.4 }}
  />
  <span className="relative z-10 text-xs font-medium text-white">
    +{numPeople}
  </span>
  <motion.div 
    className="absolute inset-0 rounded-full ring-1 ring-white/20"
    whileHover={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.4)', }}
  />
</motion.div>
  );
};

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

export const AvatarCircles = ({
  className,
  numPeople = 0,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div
      className={cn("z-10 flex -space-x-3 justify-center", className)}
      style={{ gridAutoFlow: "column" }}
    >
      {avatarUrls.map((avatar, index) => (
        <AvatarCircle key={index} avatar={avatar} index={index} />
      ))}
      {numPeople > 0 && <AvatarCount numPeople={numPeople} />}
    </div>
  );
};