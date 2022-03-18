import { useState } from "react";

export default function Cicilan (props){
    let [nominal, setNominal] = useState(0)
    let [bunga, setBunga] = useState(0)
    let [periode, setPeriode] = useState(0)
    let [cicilan, setCicilan] = useState(0)

    let hitungCicilan = () =>{
        setCicilan((nominal/periode)+((bunga*nominal)/100))
    }

    return(
        <div className="container" style={{fontFamily:`poppins`}}>
            <div className="card">
                <div className="card-header bg-dark mb-3">
                    <h3 className="text-white">Cicilan Bank</h3>
                </div>
                {/* Body Input */}
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-4 d-flex justify-content-center mt-2">
                            <h5 className="">Nominal</h5>
                        </div>
                        <div className="col-7">
                            <input type={`number`} className="form-control" 
                            value={nominal} onChange={ev => setNominal(ev.target.value)}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 d-flex justify-content-center mt-2">
                            <h5 className="">Bunga</h5>
                        </div>
                        <div className="col-7">
                            <input type={`number`} className="form-control" placeholder="Isi dalam satuan meter"
                            value={bunga} onChange={ev => setBunga(ev.target.value)}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 d-flex justify-content-center mt-2">
                            <h5 className="">Periode</h5>
                        </div>
                        <div className="col-7">
                            <select name="periode" className="form-control"
                            value={periode} onChange={ev => setPeriode(ev.target.value)}>
                                <option value="6">6 Bulan</option>
                                <option value="12">12 Bulan</option>
                                <option value="60">5 Tahun</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-success mb-2 form-control"
                    onClick={() => hitungCicilan()}>
                        Hitung
                    </button>
                </div>
                {/* Button */}
                <div className="card-footer">
                    <h5 className="text-secondary">
                        {`Cicilannya adalah Rp${cicilan} per bulan`}
                    </h5>
                </div>
            </div>
        </div>
    )
}