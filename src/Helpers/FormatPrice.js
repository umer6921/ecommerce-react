import React from 'react'

export default function FormatPrice({price}) {
  return (
    <>
    {
        Intl.NumberFormat("en-PK", {style: "currency", currency: "PKR", maximumFractionDigits: 0,}).format(price/10)
    }
    
    </>
  )
}
