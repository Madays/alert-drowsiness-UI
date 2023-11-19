import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";

const PusherTest = () => {
    const [srcVideo, setSrcVideo] = useState(null)
    const [srcLive, setSrcLive] = useState(null)

  useEffect(() => {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    const pusher = new Pusher("ddc62434eb2ed7d73396", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("humanState");
    channel.bind("dreamState", function (data) {
      console.log(data);
      setSrcVideo("https://d290-2800-4b0-9902-9df6-15d7-abf-40c6-1813.ngrok.io" + data.video)
      setSrcLive("https://d290-2800-4b0-9902-9df6-15d7-abf-40c6-1813.ngrok.io" + data.live)
      console.log("URLVIDEO",srcVideo)
    });

    // Clean up the subscription when the component unmounts
    return () => {
      pusher.unsubscribe("humanState");
    };
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  return (
    <>
    {/* {srcVideo?<video width="1200" autoPlay muted="muted">
      <source src={srcVideo} type="video/mp4" />
    </video>:"no hay dormilones"} */}
    {srcLive?<img src={srcLive} width="50%"></img>:"no hay streeming"}
    </>

  );
};

export default PusherTest;
