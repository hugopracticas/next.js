import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Pricing Title',
    description: 'Pricing'
}

export default function PricingPage(){
    return(
      <>
          <span className="text-7xl">Pricing Page</span>
      </>
    )  
  }