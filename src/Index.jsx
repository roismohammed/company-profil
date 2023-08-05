import Guest from "./layouts/Guest";
import './Index.css'
import { RiArrowUpCircleFill } from "react-icons/ri";
import { useState } from "react";
import 'animate.css';
export default function Index() {
    const [stikyIcon, setStikyIcon] = useState(false)

    const changeIcon = () => {
        if (window.scrollY >= 10) {
            setStikyIcon(true)
        } else (
            setStikyIcon(false)
        )
    }

    window.addEventListener('scroll', changeIcon)
    return (
        <Guest>
            <div className="img-container" id="atas">
                <div className="container text-box d-flex align-items-center h-100 text-white ">
                    <div className="text-box">
                        <h1 className="judul-index animate__animated animate__fadeInDown">Tusuk Sate,Murah</h1>
                        <p >Melayani Jual Beli Tusuk Sate murah Dari Bambu harga terjangkau dan ekonomis dan lain-lain </p>
                        <div className="tombol   ">
                            <button className="btn btn-outline-light mx-2">Selengkapnya</button>
                            <button className="btn btn-warning text-white mx-2">Hubungi Kami</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-end">
                <div className="fixed-bottom float-end p-3 ">
                    <a href="#atas">
                        <RiArrowUpCircleFill className={stikyIcon ? "icon" : 'icon-none'} />
                    </a>
                </div>
            </div>
        </Guest>
    )
}