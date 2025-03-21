import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
const NoJobs = () => {
  return (
    <div>
         <div className="bg-rose-400 rounded-lg p-8 shadow-lg flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Sorry, No Active Jobs Currently
          </h1>
          <p className="text-white text-xl max-w-lg mb-8">
            Check back soon as new opportunities are added regularly!
          </p>
          <div className="relative w-40 h-40 mb-6">
            <Image
              src="/sorryEmoji.webp"
              alt="No Jobs"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
         

      <div className="flex items-center justify-center space-x-4">
      <Link href="/">
            <Button variant="outline" className="w-full border-none py-3 bg-black text-white font-medium rounded-lg hover:bg-rose-400 hover:text-zinc-50 transition-colors duration-300">Go Back Home </Button>
         </Link>

         <Link href="/">
            <Button variant="outline" className="w-full border-none py-3 bg-black text-white font-medium rounded-lg hover:bg-rose-400 hover:text-zinc-50 transition-colors duration-300">Subscribe to our newsletter</Button>
         </Link>
      </div>
        </div>
    </div>
  )
}

export default NoJobs