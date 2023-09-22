import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderConfirmed() {

    const goBack = useNavigate();
  return (
    <div>
      <p>Order Confirmed</p>
      <button onClick={() => goBack(-1)}>Back</button>
    </div>
  )
}

export default OrderConfirmed
