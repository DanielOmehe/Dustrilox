import { Children } from "react"

const HeroContentCarousel =({currentItem, children})=>{
    return(
        <div className="hero-content-carousel">{Children.map(children, (child, indx) => indx === currentItem ? child : null)}</div>
    )
}

export default HeroContentCarousel