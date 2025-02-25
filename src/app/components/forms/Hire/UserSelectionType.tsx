import Image from "next/image";
import { motion } from "motion/react";
import { Search, Building2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, cardHover } from "@/lib/Animations";
import { Button } from "@/components/ui/button";

type UserSelectionType = "company" | "jobseeker";

interface UserSelectionTypeProps {
  onSelect: (type: UserSelectionType) => void;
}

const UserTypeCard = ({
  type,
  title,
  description,
  icon: Icon,
  color,
  onSelect
}: {
  type: UserSelectionType;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  onSelect: () => void;
}) => (
  <motion.div
    variants={cardHover}
    whileHover="hover"
    className="group relative h-full"
    role="button"
    tabIndex={0}
    onClick={onSelect}
    onKeyDown={(e: { key: string; }) => e.key === "Enter" && onSelect()}
  >
    <div className={cn(
      "relative bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl h-full",
      "transition-all duration-300 flex flex-col",
      `group-hover:border-${color}-300/50`
    )}>
      <div className={cn(
        "absolute top-0 left-0 w-full h-full rounded-2xl opacity-0",
        "bg-gradient-to-br transition-opacity group-hover:opacity-100",
        `from-${color}-300/10 via-transparent to-transparent`
      )} />

      <div className="relative space-y-6 flex-grow">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/5 rounded-xl">
            <Icon size={32} className={cn(`text-${color}-300`)} />
          </div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <p className="text-white/70">{description}</p>
      </div>

      <div className="relative mt-4">
        <Button variant="ghost" className={cn(
          "gap-2 transition-transform",
          `text-${color}-300 hover:text-${color}-400`,
          "group-hover:translate-x-2"
        )}>
          {type === "jobseeker" ? "Browse Jobs" : "Post a Job"}
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </Button>
      </div>
    </div>
  </motion.div>
);

export default function UserSelectionTypeForm({ onSelect }: UserSelectionTypeProps) {
  return (
    <div className="min-h-screen max-w-5xl mx-auto">
      <div className="mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <motion.div variants={fadeInUp} className="inline-flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-300/20 via-white/10 to-rose-300/20 blur" />
                <div className="relative bg-black/50 p-3 rounded-lg">
                  <Image
                    src="/favicon_io/android-chrome-192x192.png"
                    alt="FounderFindsDev Logo"
                    width={64}
                    height={64}
                    className="size-16"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className={cn(
                "text-4xl md:text-6xl font-extrabold",
                "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
              )}
            >
              Welcome to FounderFindsDev
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              Choose your path to begin your journey with us
            </motion.p>
          </div>

          {/* Selection Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
            <UserTypeCard
              type="jobseeker"
              title="Job Seeker"
              description="Browse opportunities that match your skills and aspirations."
              icon={Search}
              color="indigo"
              onSelect={() => onSelect("jobseeker")}
            />

            <UserTypeCard
              type="company"
              title="Organization"
              description="Post job openings and find top talent. Find the perfect talent to join your team."
              icon={Building2}
              color="rose"
              onSelect={() => onSelect("company")}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}