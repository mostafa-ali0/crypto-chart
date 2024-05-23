import Image from "next/image";
import Table from "@/components/Table";

export default function Home() {
  return (
    <>
    <div>
    <h1 className="m-[10px] my-[3rem] flex justify-center content-center font-mono text-4xl">Trending Crypto Currencies</h1>
    </div>
    <Table />
    <p>Data provided by CoinGecko API</p>
    </>
  );
}
