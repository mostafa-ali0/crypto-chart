"use client";
import axios from "axios";
import TableRow from "./TableRow";
import { useEffect, useState } from "react";
import { setInterval } from "timers";
import data from "./sample-data.js";

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
  let [load, setLoad] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.request(options);
      const data = response.data;
      setCoins(data.coins);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
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
          <tbody>{!load && coins.map(createTableRow)}</tbody>
        </table>
      </div>
      <div className="flex justify-center text-4xl my-[5rem]">{load && <h1>Loading...</h1>}</div>
    </div>
  );
}
