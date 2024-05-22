import axios from "axios";

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

let coins;
let response;
let data;
async function apiCall() {
    try {
        response = await axios.request(options);
        data = response.data;
        coins = data.coins;
        const coin1 = coins[0].item;
        console.log("Name " + coin1.name);
        console.log("Price " + coin1.data.price);
        console.log("Pic URL " + coin1.thumb);
        console.log("Sparkline " + coin1.data.sparkline);
    } catch (error) {
        console.log("error");
        console.log(error);
    }
}

apiCall();
