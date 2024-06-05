"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import data from "./sample-data.js";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image.js";
import { LoadingSpinner } from "./ui/loadingspinner";

const sampleCoinsData = data.coins;

const APIKey = "CG-eTCQgwN1jvEF12x81xRdGtwD";
const apiRootURL = "https://api.coingecko.com/api/v3/";
const options = {
  method: "GET",
  url: "https://api.coingecko.com/api/v3/search/trending",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-eTCQgwN1jvEF12x81xRdGtwD",
  },
};

function createTableRow(coin: any) {
  let price = `$${Number(coin.item.data.price).toFixed(5)}`;
  return (
    <TableRow
    key={coin.item.name}
    >
      <TableCell>
        <div className="flex ml-[50px]">
          <img src={coin.item.thumb} alt={coin.item.name} className="rounded-[50%]"/>
          <p className="my-auto ml-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">{coin.item.name}</p>
        </div>
      </TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>
        <img src={coin.item.data.sparkline} alt={coin.item.name} />
      </TableCell>
    </TableRow>
  );
}

export default function TableMine() {
  let [coins, setCoins] = useState([]);
  let [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(fetchData, 1000);
  }, []);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  async function fetchData() {
    try {
      const response = await axios.request(options);
      const data = response.data;
      setCoins(data.coins);
      // setCoins(sampleCoinsData);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-[60vw] flex justify-center mx-auto">
      {load ? 
      <LoadingSpinner 
      className="h-[30vh] w-[30vw]"
      /> 
      : 
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-[70px]">Name</TableHead>
            <TableHead>Price $USD</TableHead>
            <TableHead>Sparkline</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coins.map(createTableRow)}
        </TableBody>
      </Table>}
    </div>
  );
}
