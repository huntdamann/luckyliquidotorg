import React from "react";
import Image from 'next/image'
import '../../css/Marquee.css'

interface StockItem {
    link: string
    company: string
    price: string
    change: string
    direction: "plus" | "minus"
  }
  
  const stocks: StockItem[] = [
    {link: "/assets/founders_market.jpeg" , company: "Made With Intention", price: "181.16", change: "-1.36 (-0.75%)", direction: "minus" },
    {link: "/assets/ug_market.png" , company: "Hand-Crafted Candles", price: "181.16", change: "-1.36 (-0.75%)", direction: "minus" },
    {link: "/assets/lafamily.jpeg" , company: "Glass Photo Albums", price: "181.16", change: "-1.36 (-0.75%)", direction: "minus" },
    {link: "/assets/deepellum.jpeg" , company: "More Soon", price: "181.16", change: "-1.36 (-0.75%)", direction: "minus" },
  ]

  const Spacer = () => (
    <li aria-hidden="true" style={{ display: "flex", alignItems: "center" }}>
      <div style={{ transform: "rotate(45deg)", width: "8px", height: "8px", backgroundColor: "rgba(0, 0, 0, 0.5)", flexShrink: 0 }} />
    </li>
  )
  
  const StockList = ({ hidden = false }: { hidden?: boolean }) => (
    <ul aria-hidden={hidden || undefined}>
      {stocks.map((stock, index) => (
        <React.Fragment key={stock.company}>
          <li>
            {/* <span className="company">{stock.company}</span> */}
            <Image src={stock.link} width={100} height={100} alt="logo" />
          </li>
          <Spacer />
        </React.Fragment>
      ))}
    </ul>
  )
  
  export default function StockTicker() {
    return (
      <div className="stock-ticker">
        <StockList />
        <StockList hidden />
      </div>
    )
  }