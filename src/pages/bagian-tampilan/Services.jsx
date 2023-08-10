import './Services.css'
import { RiBuilding2Fill, RiPlaneLine, RiTakeawayFill, RiTruckFill } from "react-icons/ri";
export default function Services() {
    return (
        <div className="container services" id='services'>
            <div className="row" >
                <div className="col-md-4 text-end" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <h5>Our Services</h5>
                    <h2>WHAT WE CAN DO FOR YOU</h2>
                </div>

                <div className="col-md-4" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
                    <div className="card-hover  text-center p-3" >
                        <RiTruckFill className='icon-services' />
                        <div className="card-body mt-4">
                            <h5 className="card-title">TRUCKING</h5>
                            <p className="card-text mt-3">
                                Untuk menjamin kualitas layanan dan ketepatan waktu dalam pengiriman semua barang, operasional kami telah dilengkapi dengan armada truck dan trailer di Jakarta dan Surabaya.
                            </p>
                        </div>
                    </div>

                    <div className="card-hover text-center p-3 mt-4" >
                        <RiPlaneLine className='icon-services' />
                        <div className="card-body mt-4">
                            <h5 className="card-title">EXPORT-IMPORT</h5>
                            <p className="card-text mt-3">
                                Untuk membantu klien kami dalam memperoleh bahan baku, mesin, dan produk lainnya dari luar negeri, serta untuk membantu mendistribusikan/ mengekspor produk dari Indonesia ke luar negeri, kami menyediakan layanan pengurusan bea cukai dan pengurusan dokumen pendukung lainnya


                            </p>
                        </div>
                    </div>


                </div>

                <div className="col-md-4" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
                    <div className="card-hover text-center p-3" >
                        <RiBuilding2Fill className='icon-services' />
                        <div className="card-body mt-4">
                            <h5 className="card-title">WAREHOUSING</h5>
                            <p className="card-text mt-3">
                                Untuk menjamin kepuasan klien atas layanan kami, kami menyediakan fasilitas Gudang yang dapat digunakan sebagai gudang transit (FCL or LCL) untuk pengiriman ke Indonesia Timur
                            </p>
                        </div>
                    </div>

                    <div className="card-hover text-center p-3 mt-4" >
                        <RiTakeawayFill className='icon-services' />
                        <div className="card-body mt-4">
                            <h5 className="card-title">DOMESTIC FORWARDING</h5>
                            <p className="card-text mt-3">
                                Selalu siap melayani kebutuhan pengangkutan barang dalam Kota. Kami menyediakan jasa layanan pengangkutan barang dalam Kota, layanan muatan Permotoran antar kota, transportasi darat ke seluruh Indonesia
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}