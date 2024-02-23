"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/button";
import Spinner from "./components/spinner";
import Taggif from "./components/taggif";
import Customhook from "./components/customhook";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
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
  // console.log("base64 is ", base64);
  return (
    <div className={styles.container}>
      <div className="maincontainer">
        <div className="c1">RANDOM GIFS</div>
        <div className="c2">
          <div>A RANDOM GIF</div>
          <div>
            {loading ? (
              <Spinner />
            ) : base64 ? (
              <Image
                src={imgurl}
                placeholder="blur"
                blurDataURL={base64}
                priority={true}
                quality={50}
                alt="GIF"
                width={350}
                height={350}
              />
            ) : null}
          </div>
          <Button
            callapi={() => {
              callapi("");
            }}
          />
        </div>
        <div>
          <Taggif />
        </div>
      </div>
    </div>
  );
}
