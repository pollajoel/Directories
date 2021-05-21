import React from "react";
import "../../src/static/css/headerComponent.css";
import Check from "../static/images/check.png";
import found from "../static/images/not-found.png";
import place from "../static/images/placeholder.png";
import slider from "../static/images/midtown-manhattan-new-york-city-usa.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";





const HomeBarre = ()=>{
 const data =[
     {id:1,title:"Choisir quoi faire ?",description:"à la recherche d'un hôtel confortable pour séjourner, d'un restaurant pour manger, d'un musée à visiter ou d'un centre commercial pour faire quelque chose",icon:Check},
     {id:2,title:"Trouve ce que tu veux.",description:"recherchez et filtrez des centaines d'annonces, lisez des critiques, explorez des photos et trouvez l'endroit idéal",icon:found},
     {id:3,title:"Explorer un endroit incroyable.",description: "passez un bon moment ou même faites votre réservation directement depuis la page de liste. Tous ces remerciements à ListingDir",icon:place}
 ]

    const features = [
        {id:1,img:slider,description:"description courte",title:"san franscisco"},
        {id:2,img:slider,description:"description courte",title:"san franscisco"},
        {id:3,img:slider,description:"description courte",title:"san franscisco"},
        {id:4,img:slider,description:"description courte",title:"san franscisco"},
        {id:5,img:slider,description:"description courte",title:"san franscisco"},
        {id:6,img:slider,description:"description courte",title:"san franscisco"},
        {id:7,img:slider,description:"description courte",title:"san franscisco"},
        {id:8,img:slider,description:"description courte",title:"san franscisco"},
        {id:9,img:slider,description:"description courte",title:"san franscisco"},
        {id:10,img:slider,description:"description courte",title:"san franscisco"},
        {id:11,img:slider,description:"description courte",title:"san franscisco"},
    ]

    const settings = {

     dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };


    return(
        <div className='homebarre'>
            <div className="blockContainer">
                <h2>Comment ça fonctionne ?</h2>
                <div className="featuredetails">
                    {
                        data.map(elt =><div key={elt.id} className="featurecontain">
                            <div className="iconblock"><img src={elt.icon} className="iconfeature" alt={elt.description}/></div><div className="titleblockfeature titlelt">{elt.title}</div>
                            <div  className="iconblock number">{elt.id}</div><div className="titleblockfeature">{elt.description}</div>
                        </div>)
                    }
                </div>
                <hr className="underline"/>
                 <h2>Entreprise et offre à la une.</h2>

                 <Slider {...settings}>
                     {
                         features.map(elt=><div key={elt.id}>
                             <img src={elt.img} className="slickslider" alt={elt.title}/>
                             <h3>{elt.title}</h3>
                             <p>{elt.description}</p>
                         </div>)
                     }


        </Slider>












                <div>
      </div>

            </div>
        </div>
    )
}



export default HomeBarre;