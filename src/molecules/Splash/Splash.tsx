import { Logo } from "@/atoms/Logo"
import clsx from "clsx";
import { useEffect, useState } from "react";

export const Splash = () => {
  const [isLogoVisible, setIsLogoVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLogoVisible(true);
    }, 500)
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Logo className={clsx(!isLogoVisible ? 'opacity-0' : 'opacity-100', 'w-44 fill-white transition-opacity duration-1000 ease-in-out')} />
    </div>
  )
}