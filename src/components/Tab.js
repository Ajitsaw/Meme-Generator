import React from 'react'

export default function Tab() {
    return (
        <section className="tab py-large">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <div className="text mb-medium">
                            <h3 className='font-weight-bold'>
                                Made with our tools
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="tabs">

                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto d-flex">
                        <div class="details text-center"><h3>4.1<span>M</span><span class="plus"></span></h3> <p>Monthly users</p></div>
                        <div class="details text-center"><h3>107.1<span>M</span><span class="plus"></span></h3> <p>Videos made</p></div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
