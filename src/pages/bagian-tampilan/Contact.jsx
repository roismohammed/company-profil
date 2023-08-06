import './Contact.css'
export default function Contact() {
    return (
        <div className="container contact" data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" data-aos-duration="1500" id='contact'>
            <div className="row p-3">
                <div className="text-center">
                    <h2>Contact Us</h2>
                    <small className="text-secondary">Lebih dekat bersama kami</small>
                </div>
                <div className="col-md-6">
                    <div className="form ">
                        <div className="div">
                            <label >Nama : </label>
                            <input type="text" className="form-control form-control-sm" placeholder="Enter Name" />
                        </div>

                        <div className="div">
                            <label>Email : </label>
                            <input type="text" className="form-control form-control-sm" placeholder="Enter Email" />
                        </div>

                        <div className="div">
                            <label>Message: </label>
                            <textarea type="text" className="form-control form-control-sm"  />
                        </div>

                        <button className="btn btn-primary mt-3">Kirim Pesan</button>

                    </div>
                </div>

                <div className="col-md-6 mt-4">
                    <div className="">
                        <p>PT.MyMunip</p>
                        <p>Alamat: Jalan Raya Tanah Merah Ds.Rongdurin Dsn.Bandungan Kec.Tanah Merah Kab.Bangkalan </p>
                        <p>Email: id.roismohammed@gmail.com</p>
                        <p>No Tlp: 085940466426</p>
                    </div>
                </div>

            </div>
        </div>
    )
}