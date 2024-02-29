const ClientTestimonialCarouselItem =({url, name, post, testimony})=>{
    return(
        <div className="client-testimonial-carousel-item">
        <p className="testimony">{testimony}</p>
        <div className="carousel-item-footer">
            <img src={url} alt="" />
            <div className="client">
                <h1>{name}</h1>
                <p>{post}, <span>Alonso Co.</span></p>
            </div>
        </div>
        </div>
    )
}

export default ClientTestimonialCarouselItem