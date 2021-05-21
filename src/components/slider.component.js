import React from "react";
import '../static/css/sliderComponent.css';
import Categories from "./categorie.component";



const Slider = ()=>{

    const ListCategories =[{name:"catName", icon:"catIcon"},
    {name:"catName1", icon:"catIcon"},
        {name:"catName2", icon:"catIcon"},
        {name:"catName3", icon:"catIcon"},
        {name:"catName4", icon:"catIcon"},
        {name:"catName5", icon:"catIcon"},
        {name:"catName6", icon:"catIcon"},
    ]


    return(
        <div className="headerbackground">

            <div className="sliderTitle">
                <div>
                    <h1>Discover </h1><br/>
                    <span>Your Amazing City</span>
                    <p>find great glace to stay, eat, shop or visit from local expert</p>
                </div>
            </div>

            <div className="searchForm">
                <form className="FormLayout">
                    <div className="formInput">
                        <label className="searchlabel">Quoi ?</label>
                        <input type="text" placeholder=" Une ambassade ?" className="what"/>
                        <ul className="wherestate">
                            <li>resutat1</li>
                            <li>resutat1</li>
                            <li>resutat1</li>
                            <li>resutat1</li>
                            <li>resutat1</li>
                        </ul>
                    </div>
                    <div className="formInput">
                        <label className="searchlabel">Ou?</label>
                        <input type="text" placeholder="Ex: Paris st-denis" className="where"/>
                        <ul className="Searresultat">
                            <li>resutat1</li>
                            <li>resutat1</li>
                            <li>resutat1</li>
                            <li>resutat1</li>
                            <li>resutat1</li>
                        </ul>
                    </div>
                    <div className="formInputsearch">
                        <button className="searchbutton">Rechercher</button>
                    </div>

                </form>

            </div>

            <div className="categoriesList">
                {
                    ListCategories.map(cat=><Categories key={cat.name}></Categories>)
                }
            </div>


        </div>
    )
}

export default Slider;