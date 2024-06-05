import NavBar from '@/components/NavBar'
import Table from '@/components/Table'

export default function Trending() {
  return (
    <div className='h-screen'>
			<NavBar />
      <h1 className="py-[50px] text-7xl text-white font-bold bg-black flex justify-center border-b-4 border-sky-400">Trending Crypto Coins</h1>
      <Table/>
      <p className="flex justify-center pb-5 bg-gray-200 pt-5 text-gray-700">Data provided by CoinGecko API</p>    
    </div>
  )
}
