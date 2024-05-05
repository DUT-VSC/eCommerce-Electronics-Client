import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <Container className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img
                                src="images/cross.svg"
                                alt="cross"
                                className='position-absolute cross img-fluid'
                            />
                            <div className="wishlist-card-image">
                                <img
                                    src="images/watch.jpg"
                                    className='img-fluid w-100'
                                    alt="watch"
                                />
                            </div>
                            <div className="px-3 py-3">
                                <h5 className='title'>Honor T1 7.0 RAM 8GB ROM 7 Inches With Wi-Fi+3G Tablet</h5>
                                <h6 className='price'>$ 100.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img
                                src="images/cross.svg"
                                alt="cross"
                                className='position-absolute cross img-fluid'
                            />
                            <div className="wishlist-card-image">
                                <img
                                    src="images/watch.jpg"
                                    className='img-fluid w-100'
                                    alt="watch"
                                />
                            </div>
                            <div className="px-3 py-3">
                                <h5 className='title'>Honor T1 7.0 RAM 8GB ROM 7 Inches With Wi-Fi+3G Tablet</h5>
                                <h6 className='price'>$ 100.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img
                                src="images/cross.svg"
                                alt="cross"
                                className='position-absolute cross img-fluid'
                            />
                            <div className="wishlist-card-image">
                                <img
                                    src="images/watch.jpg"
                                    className='img-fluid w-100'
                                    alt="watch"
                                />
                            </div>
                            <div className="px-3 py-3">
                                <h5 className='title'>Honor T1 7.0 RAM 8GB ROM 7 Inches With Wi-Fi+3G Tablet</h5>
                                <h6 className='price'>$ 100.00</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Wishlist