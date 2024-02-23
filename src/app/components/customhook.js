"use client";
import { useEffect, useState } from "react";
import axios from "axios";
const apikey = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
export default function Customhook() {
  const [imgurl, setimgurl] = useState("");
  const [loading, setloading] = useState(false);
  async function callapi(tag) {
    // const res1 = await axios.get("/api/apikey");
    // console.log("getting api key", res1);
    // console.log("calling api.....");
    setloading(true);
    // console.log("tag value is", tag);
    const res = await axios.get(
      tag ? apikey + `&tag=${tag}&rating=g` : apikey + `&tag=&rating=g`
    );
    setloading(false);
    // console.log("api response is:", res);
    setimgurl(res.data.data.images.downsized_large.url);
  }
  useEffect(() => {
    callapi();
  }, []);
  return { loading, imgurl, callapi };
}
