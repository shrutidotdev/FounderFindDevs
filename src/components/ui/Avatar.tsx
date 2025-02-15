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
      whileHover={{ scale: 1.6 }}
      className="relative h-10 w-10 md:h-[3rem] md:w-[3rem] md:rounded-full rounded-full overflow-hidden border-2 border-white/20 bg-white/5 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-rose-500/10" />
      <Image
        className="relative object-contain"
        src={avatar.imageUrl}
        alt={`Avatar ${index + 1}`}
        width={60}
        height={60}
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
    <motion.a
      href="#"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        delay: numPeople * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.1 }}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/10 to-rose-500/10" />
      <span className="relative z-10 text-xs font-medium text-white">
        +{numPeople}
      </span>
      <div className="absolute inset-0 rounded-full ring-1 ring-white/20" />
    </motion.a>
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