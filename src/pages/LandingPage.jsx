import React, { useState } from 'react'
import PusherTest from '../components/PusherTest';

function LandingPage() {
  const [drowsinessAlerts, setDrowsinessAlerts] = useState(null);


  return (
    <>
      <PusherTest/>
    </>
  )
}

export default LandingPage