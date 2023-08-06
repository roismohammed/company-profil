import Guest from "../../layouts/Guest";
import "./Tentang.css";

export default function Tentang() {
    return (
        <Guest>
            <div className="container mt-5 tentang" id="about">
                <div className="row ">
                    <div className="d-flex justify-content-center text-center p-3">
                        <div className="col-md-8"  data-aos="fade-down" data-aos-duration="1500">
                            <div>
                                <h3>About Me</h3>
                                <p className="tentang ">Tusuk Sate Murah adalah sebuah perusahaan yang didedikasikan untuk memproduksi dan menyediakan berbagai macam tusuk sate berkualitas dengan harga yang terjangkau. Dengan fokus pada kualitas produk dan layanan pelanggan, kami telah menjadi pilihan utama bagi para pecinta sate dan pengusaha kuliner.</p>
                                <button className="btn btn-primary">Selengkapnya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    );
}
