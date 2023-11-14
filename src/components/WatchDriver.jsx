function WatchDriver({ srcVideo }) {
  return (
    <>
      {/* <video
        width="640"
        height="480"
        src= "https://www.youtube.com/watch?v=gnRxVgXsAJM"
        controls
      ></video> */}
			<iframe
          width="640"
          height="480"
          src="https://www.youtube.com/embed/gnRxVgXsAJM"
          title="YouTube Video"
          allowFullScreen
        ></iframe>
    </>
  );
}

export default WatchDriver;
