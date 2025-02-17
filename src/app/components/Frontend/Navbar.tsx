import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { auth, signOut } from "@/lib/auth";
import { Button } from "@/components/ui/button";

async function Navbar() {
  const session = await auth();
  console.log(session);

  return (
    <div className="flex w-full bg-black fixed z-50 top-0 left-0 right-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 rounded-2xl py-5 px-5">
          {/* Logo and Name */}
          <Link
            href="/"
            className={cn(
              "text-2xl font-extrabold flex justify-center items-center gap-2",
              "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
            )}
          >
            <Image
              src="/icona.svg"
              alt="JobBoard Logo"
              width={40}
              height={40}
            />
            Job Board
          </Link>

         {/* Sign In / Sign Up / Logout */}
          <div className="hidden md:flex items-center gap-4">
            {session?.user ? (
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <Button>Logout</Button>
              </form>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-white font-semibold hover:text-gray-200  transition-colors"
                >
                  <Button>Login</Button>
                </Link>
                <Link
                  href="/signup"
                  className="text-white font-semibold hover:text-gray-200 transition-colors"
                >
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
