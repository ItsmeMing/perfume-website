import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSprayCanSparkles,
    faCaretDown,
    faPersonDress,
    faPerson,
    faQuestion,
    faCircleInfo,
    faMagnifyingGlass,
    faUser as faUserSolid,
} from "@fortawesome/free-solid-svg-icons";
import "./MobileMenu.scss";

const MobileMenu = ({ searchRef, auth, sMenu, arrow }) => {
    const handleSubMenu = () => {
        sMenu.current.classList.toggle("active");
        arrow.current.classList.toggle("active");
    };

    return (
        <Fragment>
            <ul className="m-menu">
                <li className="m-menu-item" id="sub">
                    <div className="menu-text" onClick={handleSubMenu}>
                        Perfumes
                        <FontAwesomeIcon ref={arrow} icon={faCaretDown} className="menu-icon" />
                    </div>
                    <ul ref={sMenu} className="s-menu">
                        <li className="s-menu-item">
                            <p className="menu-text">All</p>
                            <FontAwesomeIcon icon={faSprayCanSparkles} className="menu-icon" />
                        </li>
                        <li className="s-menu-item">
                            <p className="menu-text">Men</p>
                            <FontAwesomeIcon icon={faPerson} className="menu-icon" />
                        </li>
                        <li className="s-menu-item">
                            <p className="menu-text">Women</p>
                            <FontAwesomeIcon icon={faPersonDress} className="menu-icon" />
                        </li>
                        <li className="s-menu-item">
                            <p className="menu-text">Unisex</p>
                            <FontAwesomeIcon icon={faQuestion} className="menu-icon" />
                        </li>
                    </ul>
                </li>
                <li className="m-menu-item">
                    <p className="menu-text">About</p>
                    <FontAwesomeIcon icon={faCircleInfo} className="menu-icon" />
                </li>
                <li
                    className="m-menu-item"
                    onClick={() => {
                        document.querySelector(".m-menu").classList.remove("active");
                        searchRef.current.classList.toggle("active");
                    }}
                >
                    <p className="menu-text">Search</p>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="menu-icon" />
                </li>
                <li
                    className="m-menu-item"
                    onClick={() => {
                        auth.current.classList.toggle("active");
                        setTimeout(() => {
                            document.querySelector(".m-menu").classList.remove("active");
                            document.querySelector(".overlay").classList.remove("active");
                        }, 1000);
                    }}
                >
                    <p className="menu-text">Log In</p>
                    <FontAwesomeIcon icon={faUserSolid} className="menu-icon" />
                </li>
            </ul>
        </Fragment>
    );
};

export default MobileMenu;
