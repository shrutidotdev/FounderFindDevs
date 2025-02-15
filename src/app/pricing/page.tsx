"use client"

import { motion } from "motion/react"
import { Check } from "lucide-react"
import GlassMorphism from "@/components/ui/GlassMorphism"

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for getting started",
    features: [
      "1 job posting",
      "Basic job listing",
      "30 days visibility",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    description: "Best for growing companies",
    features: [
      "5 job postings",
      "Featured listings",
      "60 days visibility",
      "Priority support",
      "Company profile",
      "Analytics dashboard",
    ],
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large organizations",
    features: [
      "Unlimited job postings",
      "Premium listings",
      "90 days visibility",
      "24/7 priority support",
      "Custom company page",
      "Advanced analytics",
      "API access",
      "Custom integration",
    ],
  },
]

export default function Pricing() {
  return (
    <div className="relative min-h-screen w-full pt-24 bg-[#000000]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <GlassMorphism
        className="left-[5%] top-[20%]"
        width={300}
        height={300}
        rotate={15}
        delay={0.2}
        gradient="from-indigo-500/[0.08]"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70"
          >
            Choose the plan that best fits your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-white mb-4">{plan.price}</div>
              <p className="text-white/70 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-white/70">
                    <Check className="w-5 h-5 mr-2 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#fa7272] via-transparent to-[#830303]/80 pointer-events-none" />
    </div>
  )
}