import { useState } from "react";
import { connect } from "react-redux";
import { changeFullValue } from "./redux/actions";
import Range from "./components/Range/Range";

import "./App.scss";

import { ReactComponent as AngleDown } from "./icons/fa-angle-down.svg";
import { ReactComponent as Marker } from "./icons/footer/fa-map-marker.svg";
import { ReactComponent as Phone } from "./icons/footer/fa-phone.svg";
import { ReactComponent as Share } from "./icons/footer/fa-share-alt.svg";
import { ReactComponent as Pinterest } from "./icons/footer/social-icons/fa-pinterest-p.svg";
import { ReactComponent as Facebook } from "./icons/footer/social-icons/fa-facebook.svg";
import { ReactComponent as Google } from "./icons/footer/social-icons/fa-google-plus.svg";

import corn from "./icons/footer/constructor-icons/corn.png";
import sesame from "./icons/footer/constructor-icons/sesame.png";
import soybean from "./icons/footer/constructor-icons/soybean.png";
import wheat from "./icons/footer/constructor-icons/wheat.png";
import pacage from "./icons/footer/constructor-icons/pacage.png";
import angleDownRed from "./icons/fa-angle-down-red.png";
import semen from "./icons/semen.png";

const range = [
  {
    icon: soybean,
    className: "constructor__ soybean",
  },
  {
    icon: sesame,
    className: "constructor__ sesame",
  },
  {
    icon: wheat,
    className: "constructor__ wheat",
  },
  {
    icon: corn,
    className: "constructor__ corn",
    noResize: true,
  },
];

function App({ fullSize, changeFullValue }) {
  const [isOptionShow, setIsOptionShow] = useState(false);
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const [menuIsShow, setMenuIsShow] = useState(false);
  const [optionValue, setOptionValue] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  let rangeList = document.querySelectorAll(".constructor__range");
  let rangeListValues = [
    Number(rangeList[0]?.value),
    Number(rangeList[1]?.value),
    Number(rangeList[2]?.value),
  ];
  let sum = rangeListValues.reduce((prevValue, value) => prevValue + value);

  changeFullValue(sum);

  const addToCart = () => {
    setIsShowNavbar(false);
    cartItems.push(rangeListValues);
    setCartItems([...cartItems]);
  };

  const deleteItem = (index) => {
    cartItems.splice(index, 1);
    setCartItems([...cartItems]);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header__menu container">
          <div className="header__logo">
            Cracker<span className="header__logo-sub">logo</span>
          </div>
          <div className="header__menu-inner">
            <div className="header__menu-amount">
              <img src={semen} alt="Semen" />
              <span className="header__amount">{cartItems.length}</span>
            </div>
            <span>Total: 143 E</span>
            <div className="header__menu-cart">
              <span
                className="header__menu-button"
                onClick={() => setIsShowNavbar(!isShowNavbar)}
              >
                Details
                <AngleDown />
              </span>
              {isShowNavbar ? (
                <div className="navbar">
                  {cartItems.length ? (
                    <>
                      <ul className="navbar__top-items">
                        <img src={soybean} alt="Soybean" />
                        <img src={sesame} alt="Sesame" />
                        <img src={wheat} alt="Wheat" />
                        <img src={corn} alt="Corn" />
                      </ul>
                      <div className="navbar__items">
                        <span
                          className="navbar__button-close"
                          onClick={() => setIsShowNavbar(false)}
                        >
                          X
                        </span>
                        <div>
                          {cartItems?.map((ranges, index) => (
                            <div className="navbar__items-wrapper">
                              <span>
                                <img
                                  className="navbar__semen"
                                  src={corn}
                                  alt="Corn"
                                />
                              </span>
                              <ul className="navbar__items-inner">
                                {ranges.map((value) => (
                                  <li>{value}%</li>
                                ))}
                                <li>{rangeList[3]?.value}%</li>
                                <li className="navbar__weight">150 kg</li>
                                <li className="navbar__price">81:50 E</li>
                              </ul>
                              <button
                                className="navbar__button-delete"
                                onClick={() => deleteItem(index)}
                              >
                                X
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                      <button className="navbar__button-checkout">
                        Checkout
                      </button>
                    </>
                  ) : (
                    <span className="navbar__empty-cart">Cart is empty</span>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="header__nav container">
          {menuIsShow ? (
            <>
              <span
                className="header__nav-button"
                onClick={() => setMenuIsShow(false)}
              >
                X
              </span>
              <ul className="header__list header__list-mobile">
                <li>Home</li>
                <li>About us</li>
                <li>Contacts</li>
                <li>Checkout</li>
                <li>Account</li>
              </ul>
            </>
          ) : (
            <span
              className="header__nav-button header__nav-button-open"
              onClick={() => setMenuIsShow(true)}
            ></span>
          )}
          <ul className="header__list">
            <li>Home</li>
            <li>About us</li>
            <li>Contacts</li>
            <li>Checkout</li>
            <li>Account</li>
          </ul>
        </div>
      </header>
      <section className="main">
        <div className="main__info container">
          <div className="main__info-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <h1 className="main__info-title">
            mostly tastes <br /> with freshes
          </h1>
        </div>
        <div className="container">
          <button className="main__info-button">Taste it</button>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>About Cracker</h2>
        </div>
        <div className="about__info">
          <div className="about__item container">
            <p className="about__info-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              accusamus laudantium ratione fuga necessitatibus, error molestias,
              doloremque accusantium eligendi unde illo reiciendis facilis
              quibusdam quasi sit repellendus asperiores. Incidunt, porro. Enim
              corporis commodi fuga voluptatibus voluptatum in reiciendis atque
              impedit quibusdam quae, nemo tempore quam distinctio blanditiis
              dolor animi aut expedita voluptate explicabo maxime numquam? Animi
              fugit molestiae hic laudantium? Porro quibusdam temporibus, nisi
              fuga facilis ratione dolores! Quaerat suscipit nemo veritatis cum
              architecto? Deleniti maxime maiores dignissimos dolor aut laborum
              quaerat, exercitationem non dolorum, libero, ipsum qui suscipit
              illum.
              <span className="about__logo">Cracker</span>
            </p>
          </div>
        </div>
        <div className="constructor container">
          <h2>Cracker constructor</h2>
          <span className="constructor__value">current value: 143 €</span>
          {range.map((item) => (
            <Range
              icon={item.icon}
              className={item.className}
              noResize={item.noResize}
              fullSize={fullSize}
              changeFullValue={changeFullValue}
            />
          ))}
          <div className="constructor__item">
            <img src={pacage} alt="Pacage" />
            <div className="constructor__pack">
              <div onClick={() => setIsOptionShow(!isOptionShow)}>
                {!optionValue ? "Choose your pack" : optionValue}
                <img
                  src={angleDownRed}
                  alt="Angle Down"
                  className="constructor__arrow-down"
                />
              </div>
              {isOptionShow ? (
                <div className="constructor__sub-pack">
                  <h3>Choose your pack</h3>
                  <ul
                    onClick={(e) => {
                      setOptionValue(e.target.innerHTML);
                      setIsOptionShow(false);
                    }}
                  >
                    <li>Small pack</li>
                    <li className="constructor__medium-pack">Medium pack</li>
                    <li>Large pack</li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
          <div className="constructor__buttons container">
            <button>+</button>
            <button
              className="constructor__button-add"
              onClick={() => addToCart(rangeListValues)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
      <footer className="footer container">
        <div className="footer__phone">
          <div className="footer__item">
            <Marker />
            <h3>Phone</h3>
          </div>
          <a
            className="footer__link  footer__link-number"
            href="tel:43-987-345-6782"
          >
            +43 ( 987 ) 345 - 6782
          </a>
        </div>
        <div className="footer__address">
          <div className="footer__item">
            <Phone />
            <h3>Address</h3>
          </div>
          <p className="footer__address">
            Cracker Inc.
            <br /> 10 Cloverfield Lane Berlin, IL 10928 Germany
          </p>
        </div>
        <div className="footer__share-us">
          <div className="footer__item">
            <Share />
            <h3>Share us</h3>
          </div>
          <ul className="footer__social-icons">
            <li>
              <div className="footer__social-icon">
                <Pinterest />
              </div>
              <a className="footer__link" href="https://www.pinterest.com/">
                https://www.pinterest.com/
              </a>
            </li>
            <li>
              <div className="footer__social-icon">
                <Facebook />
              </div>
              <a className="footer__link" href="https://www.facebook.com/">
                https://www.facebook.com/
              </a>
            </li>
            <li>
              <div className="footer__social-icon">
                <Google />
              </div>
              <a className="footer__link" href="https://www.google.com/">
                https://www.google.com/
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    fullSize: state.fullSize,
  };
}
const mapDispatchToProps = {
  changeFullValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
