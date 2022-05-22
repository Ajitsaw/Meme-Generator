
import React from "react"
import ResourcesChild from "./ResourcesChild"

export default function Resources(props) {

    const allMemes = props.savedData.map(item => {
        return (
            <ResourcesChild id={item.id} key={item.id} top={item.topText} bottom={item.bottomText} img={item.image} onclick={props.click}/>
        )
    })

    return (
        <section className="resources py-medium bg-light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <h2>Saved Memes</h2>
                            <p>
                                All the memes will show here
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                    {allMemes}
                </div>
            </div>
        </section>
    )
}