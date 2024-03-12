import LoginButton from "@/components/auth/loginButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
const Home = () => {
  return (
    <main
      className="flex h-full flex-col items-center justify-center
  bg-sky-300"
    >
      <div className="space-y-6 text-center">
        <div className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>
          🔒 Auth Service
        </div>
        <p className="text-white text-lg">Simple authentication service</p>

        <div>
          <LoginButton>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white rounded
          hover:bg-gray-50 hover:drop-shadow-md"
            >
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};

export default Home;
