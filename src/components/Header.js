import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { getAProduct } from "../features/products/productSlice";

const Header = () => {
    const cartState = useSelector((state) => state?.auth?.cartProducts);
    const authState = useSelector((state) => state?.auth);
    const productState = useSelector((state) => state?.product?.product);
    const [productOtp, setProductOtp] = useState([]);
    const [total, setTotal] = useState(null);
    const [paginate, setPaginate] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < cartState?.length; i++) {
            sum += Number(cartState[i]?.price) * Number(cartState[i]?.quantity);
            setTotal(sum);
        }
    }, [cartState]);

    useEffect(() => { }, [authState]);

    useEffect(() => {
        let data = [];
        for (let i = 0; i < productState?.length; i++) {
            const element = productState[i];
            data.push({ id: i, prod: element?._id, name: element?.title });
        }

        setProductOtp(data);
    }, [productState]);

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">
                                Free Shipping Over $100 & Free Return
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Hotline:
                                <a className="text-white" href="tel: +84 989 112 223">
                                    +84 989 112 223
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link to="/" className="text-white">
                                    Electroholic
                                </Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <Typeahead
                                    id="pagination-typeahead"
                                    onPaginate={() => setPaginate(true)}
                                    onChange={(selected) => {
                                        if (selected.length) {
                                            navigate(`/product/${selected[0]?.prod}`);
                                            dispatch(getAProduct(selected[0]?.prod));
                                        }
                                    }}
                                    options={productOtp}
                                    paginate={paginate}
                                    labelKey={(option) => `${option.name}`}
                                    minLength={1}
                                    placeholder="Search Product..."
                                />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className="fs-6" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    {/* <Link
                                        to="/compare-product"
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img src={compare} alt="compare" />
                                        <p className="mb-0">
                                            Compare <br /> Products
                                        </p>
                                    </Link> */}
                                </div>
                                <div>
                                    <Link
                                        to="/wishlist"
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img src={wishlist} alt="wishlist" />
                                        <p className="mb-0">
                                            Favourite <br /> Wishlist
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to={authState?.user === null ? "/login" : "/my-profile"}
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img src={user} alt="user" />
                                        {authState?.user === null ? (
                                            <p className="mb-0">
                                                Login <br /> Account
                                            </p>
                                        ) : (
                                            <p className="mb-0">
                                                {authState?.user?.firstname +
                                                    " " +
                                                    authState?.user?.lastname}
                                                <br /> Account
                                            </p>
                                        )}
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to="/cart"
                                        className="d-flex align-items-center gap-10 text-white"
                                    >
                                        <img src={cart} alt="cart" />
                                        <div className="d-flex flex-column">
                                            <span className="badge bg-white text-dark">
                                                {cartState?.length ? cartState?.length : 0}
                                            </span>
                                            <p className="mb-0">$ {total == null ? 0 : total}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div className="">
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15 header-dropdownmenu-button"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img src={menu} alt="menu" />
                                            <span className="me-5 d-inline-block">
                                                Shop categories
                                            </span>
                                        </button>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton1"
                                        >
                                            <li>
                                                <Link className="dropdown-item text-white" to="">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="">
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink className="header-navlinks" to="/">
                                            Home
                                        </NavLink>
                                        <NavLink className="header-navlinks" to="/product">
                                            Our Store
                                        </NavLink>
                                        <NavLink className="header-navlinks" to="/my-orders">
                                            My Orders
                                        </NavLink>
                                        <NavLink className="header-navlinks" to="/blogs">
                                            Blogs
                                        </NavLink>
                                        <NavLink className="header-navlinks" to="/contact">
                                            Contact
                                        </NavLink>
                                        <button
                                            onClick={handleLogout}
                                            className="border border-0 bg-transparent text-white text-uppercase"
                                            type="button"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
