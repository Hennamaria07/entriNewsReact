import React from 'react'
import Article from './Article'
import retroImg from "../assets/images/image-retro-pcs.jpg";
import laptopImg from "../assets/images/image-top-laptops.jpg";
import gamingImg from "../assets/images/image-gaming-growth.jpg";

const Articles = () => {
  return (
    <section className='articles'>
        <Article id={"01"} title={"Reviving Retro PCs"} desc={"What happens when old PCs are given modern upgrades?"} img={retroImg} />
        <Article id={"02"} title={"Top 10 Laptops of 2022"} desc={"Our best picks for various needs and budgets."} img={laptopImg} />
        <Article id={"03"} title={"The Growth of Gaming"} desc={"How the pandemic has sparked fresh opportunities."} img={gamingImg} />
    </section>
  )
}

export default Articles