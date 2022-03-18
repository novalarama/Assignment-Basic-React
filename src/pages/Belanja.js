import { useState } from "react";

export default function Belanja(props){
    let [awal, setAwal] = useState(0)
    let [ppn, setPpn] = useState(0)
    let [diskon, setDiskon] = useState(0)
    let [akhir, setAkhir] = useState(0)

    let hitung = () =>{
        let total = awal*ppn/100-awal*diskon/100 
        setAkhir(awal += total)
    }
    return(
        <div className="container" style={{fontFamily:`poppins`}}>
            <div className="card">
                <div className="card-header bg-danger mb-3">
                    <h3 className="text-white">Hitung Harga Akhir</h3>
                </div>
                {/* Body Input */}
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-4 d-flex justify-content-center mt-2">
                            <h5 className="">Harga Awal</h5>
                        </div>
                        <div className="col-7">
                            <input type={`number`} className="form-control"
                            value={awal} onChange={ev => setAwal(ev.target.value)}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 d-flex justify-content-center mt-2">
                            <h5 className="">PPN</h5>
                        </div>
                        <div className="col-7">
                            <input type={`number`} className="form-control" 
                            value={ppn} onChange={ev => setPpn(ev.target.value)}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 d-flex justify-content-center mt-2">
                            <h5 className="">Diskon</h5>
                        </div>
                        <div className="col-7">
                            <input type={`number`} className="form-control" 
                            value={diskon} onChange={ev => setDiskon(ev.target.value)}/>
                        </div>
                    </div>
                    <button className="btn btn-success mb-2 form-control"
                    onClick={() => hitung()}>
                        Hitung
                    </button>
                </div>
                {/* Button */}
                <div className="card-footer">
                    <h5 className="text-secondary">
                        {`Harga Akhir adalah Rp${akhir}`}
                    </h5>
                </div>
            </div>
        </div>
    )
}