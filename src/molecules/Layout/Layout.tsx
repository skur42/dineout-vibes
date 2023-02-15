import { Icon } from "@/atoms/Icon";
import { BOOKINGS, EXPLORE, HOME, PROFILE } from "@/constants/pagePathnames";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import Beams from '../../assets/images/beams.jpg';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <Image src={Beams} alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 w-full h-full" />
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="z-10 w-[23.6rem] h-[44.2rem] rounded-[2.4rem] flex flex-col overflow-hidden bg-black shadow-3xl px-6 pb-4 pt-8">
        <div className="w-full h-full flex-1">
          {children}
        </div>
        <div className="w-full flex items-center justify-between">
          <Link href={HOME} className={clsx(router.pathname === HOME ? 'text-white' : 'text-gray-600', "text-base py-2 px-2")}>
            <Icon name="Home" iconProps={clsx(router.pathname === HOME ? 'fill-white' : 'fill-gray-500', "w-5 h-5")} />
            <div className="text-xs font-normal mt-1">home</div>
          </Link>
          <Link href={EXPLORE} className={clsx(router.pathname === EXPLORE ? 'text-white' : 'text-gray-600', "text-base py-2 px-2")}>
            <Icon name="Search" iconProps={clsx(router.pathname === EXPLORE ? 'fill-white' : 'fill-gray-500', "w-5 h-5")} />
            <div className="text-xs font-normal mt-1">explore</div>
          </Link>
          <Link href={BOOKINGS} className={clsx(router.pathname === BOOKINGS ? 'text-white' : 'text-gray-600', "text-base py-2 px-2")}>
            <Icon name="Bookings" iconProps={clsx(router.pathname === BOOKINGS ? 'fill-white' : 'fill-gray-500', "w-5 h-5")} />
            <div className="text-xs font-normal mt-1">bookings</div>
          </Link>
          <Link href={PROFILE} className={clsx(router.pathname === PROFILE ? 'text-white' : 'text-gray-600', "text-base py-2 px-2")}>
            <Icon name="Profile" iconProps={clsx(router.pathname === PROFILE ? 'fill-white' : 'fill-gray-500', "w-5 h-5")} />
            <div className="text-xs font-normal mt-1">ankur</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
