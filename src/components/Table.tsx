"use client";
import axios from "axios";
import TableRow from "./TableRow";
import { useState } from "react";

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

// let coins: any[];

function createTableRow(coin: any) {
  return (
    <TableRow
      key={coin.item.name}
      name={coin.item.name}
      price={coin.item.data.price}
      picUrl={coin.item.thumb}
      sparkline={coin.item.data.sparkline}
    />
  );
}

export default function Table() {
  let [coins, setCoins] = useState([]);
  async function apiCall() {
    try {
      const response = await axios.request(options);
      const data = response.data;
      // coins = data.coins;
      setCoins(data.coins);
      // console.log(coins);
    } catch (error) {
      console.log("error");
    }
  }
  apiCall();
  return (
    <div className="flex justify-center">

    <table>
      <thead>
        <tr>
          <th>Img</th>
          <th>Name</th>
          <th>Price</th>
          <th>Sparkline</th>
        </tr>
      </thead> 
      <tbody>{coins.map(createTableRow)}</tbody>
    </table>
    </div>
  );
}
