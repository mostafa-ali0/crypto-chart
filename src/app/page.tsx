import Image from "next/image";
import Table from "@/components/Table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import HomePageHero from "@/components/HomePageHero";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HomePageHero />
    </div>
  );
}
