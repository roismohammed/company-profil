import './Footer.css'
export default function Footer() {
    return (
        <div className="footer">
            <div className="header"></div>
            <div className="text-white p-4">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <h5>PT Mymunip</h5>
                            <p className='tentang-footer'>Tusuk Sate Murah adalah sebuah perusahaan yang didedikasikan untuk memproduksi dan menyediakan berbagai macam tusuk sate berkualitas dengan harga yang terjangkau. Dengan fokus pada kualitas produk dan layanan pelanggan, kami telah menjadi pilihan utama bagi para pecinta sate dan pengusaha kuliner.</p>
                        </div>

                        <div className="col-md-2 ">
                            <h6>About Me</h6>
                            <div className='d-block'>
                                <p className='p'>Visi & Misi</p>
                                <p className='p'>Layanan</p>
                                <p className='p'>Contact Us</p>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <h6>Follow Us</h6>
                            <div className='d-block'>
                                <p className='p'>Facebook</p>
                                <p className='p'>Twitter</p>
                                <p className='p'>Instagram</p>
                            </div>
                        </div>


                        <div className="col-md-2">
                            <h6>Service</h6>
                            <div className='d-block'>
                                <p className='p'>Facebook</p>
                                <p className='p'>Twitter</p>
                                <p className='p'>Instagram</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}