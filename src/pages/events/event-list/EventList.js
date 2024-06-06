import React, { Fragment } from 'react'

const EventList = () => {
    return (
        <Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">PRO Events</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus molestiae omnis quis! Autem commodi cum, doloremque ducimus et illo incidunt ipsa laboriosam magni natus nostrum nulla odio omnis praesentium recusandae, sit soluta ullam voluptatem?</p>
                            <p className="h5">Total Available : events.length</p>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <div className="card mt-3" >
                                <img src="" alt="" />
                                <div className="card-body bg-light">
                                    <div className="row">
                                        <div className="col">
                                            <p className='h4'>event.name</p>
                                            <p>DATE : event.date</p>
                                            <h6>Price : event.price</h6>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-teal btn-sm">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}

export default EventList