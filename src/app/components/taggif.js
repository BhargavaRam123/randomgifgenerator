"use client";
import Image from "next/image";
import Button from "./button";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./spinner";
import Customhook from "./customhook";
export default function Taggif() {
  const [tag, settag] = useState("");
  const { loading, imgurl, callapi } = Customhook();
  const [base64, setbase64] = useState("");
  async function fetchdata() {
    // console.log("calling base64 api");
    const resonse = await axios.post("/api/base64", { imgurl: imgurl });
    const _base64 = resonse.data.base64;
    // console.log("API resonse of base64:", _base64);
    setbase64(_base64);
  }
  useEffect(() => {
    if (imgurl) fetchdata();
  }, [imgurl]);
  return (
    <div>
      <div className="c2" style={{ backgroundColor: "#61A5FB" }}>
        <div>RANDOM {tag} GIF</div>
        <div>
          {loading ? (
            <Spinner />
          ) : base64 ? (
            <Image
              src={imgurl}
              placeholder="blur"
              priority={true}
              quality={50}
              blurDataURL={base64}
              alt="GIF"
              width={350}
              height={350}
            />
          ) : null}
        </div>
        <input
          type="text"
          className="inp"
          value={tag}
          placeholder="Enter A Tag"
          onChange={(e) => {
            settag(e.target.value.toUpperCase());
          }}
        />
        <Button callapi={() => callapi(tag)} />
      </div>
    </div>
  );
}
