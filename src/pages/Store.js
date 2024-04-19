import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import ReactStars from "react-rating-stars-component";
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';


const Store = () => {
    const [grid, setGrid] = useState(4);
    alert(grid);
    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Shop By Categories
                                </h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Filter By
                                </h3>
                                <div>
                                    <h5 className="sub-title">Availability</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value='' id='' />
                                            <label className="form-check-label" htmlFor="">
                                                In stock (1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value='' id='' />
                                            <label className="form-check-label" htmlFor="">
                                                Out of stock (0)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput1" placeholder="From" />
                                        <label htmlFor="floatingInput1">From</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput2" placeholder="To" />
                                        <label htmlFor="floatingInput2">To</label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Color</h5>
                                <div>
                                    <ul className='colors ps-0'>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h5 className="sub-title">Size</h5>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value='' id='size-1' />
                                        <label className="form-check-label" htmlFor="size-1">
                                            S (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value='' id='size-2' />
                                        <label className="form-check-label" htmlFor="size-2">
                                            M (2)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value='' id='size-3' />
                                        <label className="form-check-label" htmlFor="size-3">
                                            L (2)
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Product Tags
                                </h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className='ladge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Headphone
                                        </span>
                                        <span className='ladge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Laptop
                                        </span>
                                        <span className='ladge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Mobile
                                        </span>
                                        <span className='ladge bg-light text-secondary rounded-3 py-2 px-3'>
                                            Watch
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Random Products
                                </h3>
                                <div>
                                    <div className="random-products mb-3 d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids headphone bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300.00</b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                                        </div>
                                        <div className="w-50">
                                            <h5>Kids headphone bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0" style={{"width":"100px"}}>Sort by:</p>
                                        <select name="" className='form-control form-select' id="">
                                            <option value="manual">Featured</option>
                                            <option value="best-selling" selected>Best selling</option>
                                            <option value="title-ascending">Alphabetically, A-Z</option>
                                            <option value="title-descending">Alphabetically, Z-A</option>
                                            <option value="price-ascending">Price, low to high</option>
                                            <option value="price-descending">Price, high to low</option>
                                            <option value="option-ascending">Date, old to new</option>
                                            <option value="option-descending">Date, new to old</option>
                                        </select>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center gap-10">
                                            <p className='totalproducts mb-0'>21 Products</p>
                                            <div className="d-flex gap-10 align-items-center grid">
                                                <img onClick={()=>{setGrid(4);}} src="images/gr4.svg" className='d-block img-fluid' alt="grid" />
                                                <img onClick={()=>{setGrid(3);}} src="images/gr3.svg" className='d-block img-fluid' alt="grid" />
                                                <img onClick={()=>{setGrid(2);}} src="images/gr2.svg" className='d-block img-fluid' alt="grid" />
                                                <img onClick={()=>{setGrid(1);}} src="images/gr.svg" className='d-block img-fluid' alt="grid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products-list pb-5">
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Store