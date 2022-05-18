import React from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";
import ItemListContainer from "../../../ItemListContainer/ItemListContainer";

const Dropdown = ({ color }) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    // bg colors
    let bgColor;
    color === "#fff159"
        ? (bgColor = "bg-slate-700")
        : (bgColor = "bg-" + color + "-500");
    return (
        <>
            <div className="flex flex-wrap ">
                <div className="w-full sm:w-6/12 md:w-4/12 px-4">
                    <div className=" w-full">
                        <button
                            className={
                                "text-black rounded" +
                                bgColor
                            }
                            type="button"
                            ref={btnDropdownRef}
                            onClick={() => {
                                dropdownPopoverShow
                                    ? closeDropdownPopover()
                                    : openDropdownPopover();
                            }}
                        >
                            Categorias
                        </button>
                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ") +
                                (color === "white" ? "bg-white " : bgColor + " ") +
                                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <Link to={<ItemListContainer titulo="Todos los productos"></ItemListContainer>}>
                                <p
                                    className={
                                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                        (color === "white" ? " text-slate-700" : "text-black")
                                    }
                                    onClick={e => e.preventDefault()}
                                >
                                    Todo
                                </p>
                            </Link>
                            <p
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-slate-700" : "text-black")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Gorras
                            </p>
                            <p
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-slate-700" : "text-black")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Remeras
                            </p>
                            <p
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-slate-700" : "text-black")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Tecnologia
                            </p>
                            <p
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent" +
                                    (color === "white" ? " text-slate-700" : "text-black")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Electrodomesticos
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function DropDownMenu() {
    return (
        <>
            <div className="pageLink">
                <Dropdown color="white" />
            </div>
        </>
    );
}