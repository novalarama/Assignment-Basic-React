import {useState} from "react";
import Alert from "../components/Alert";

export default function Bmi(props){
    let [berat, setBerat] = useState(0)
    let [tinggi, setTinggi] = useState(0)
    let [bmi, setBmi] = useState(0)
    let [status, setStatus] = useState("")

    let hitungBMI = () =>{
        setBmi(berat/(tinggi*tinggi))
   
        if (bmi <= 18.1) {
            setStatus("Underweight")
        }else if(bmi > 18.1 && bmi <= 23.1){
            setStatus("Normal")
        }else if(bmi > 23.1 && bmi <= 28.1){
            setStatus("Overweight")
        }else if(bmi > 28.1){
            setStatus("Obesitas")
        }else{
            setStatus("Tidak ada")
        }
    }

        let alert = () => {
            if(status === "Underwight"){
                return(
                    <Alert type="warning text-center">
                        <p>Kekurangan Berat badan</p>
                    </Alert>
                )
            }else if(status === "Normal"){
                return(
                    <Alert type="success text-center">
                        <p>Berat Badan Normal</p>
                    </Alert>
                )
            }else if(status === "Overweight"){
                return(
                    <Alert type="warning text-center">
                        <p>Berat Badan Berlebih</p>
                    </Alert>
                )
            }else if(status === "Obesitas"){
                return(
                    <Alert type="danger text-center">
                        <p>Obesitas !</p>
                    </Alert>
                )
            }else if(status === "Tidak ada"){
                return(
                    <Alert type="danger text-center">
                        <p>Masukkan Tingggi dan Berat Anda dulu !</p>
                    </Alert>
                )
            }
        }
    // Buat Alert sesuai Status
    // Alert = () => {
    //     if(status === "Underweight"){  
    //         return(
    //             <Alert type="warning text-center" >
    //                 <p>Kekurangan Berat Badan</p>
    //             </Alert>
    //         )
    //     }else if(status === "Normal"){
    //         return(
    //             <Alert type="info text-center" >
    //                 <p>Berat badan normal</p>
    //             </Alert>
    //         )
    //     }else if(status === "Overweight"){
    //         return(
    //             <Alert type="warning text-center" >
    //                 <p>Berat Badan Berlebih</p>
    //             </Alert>
    //         )
    //     }else if(status === "Obesitas"){
    //         return(
    //             <Alert type="danger text-center" >
    //                 <p>Obesitas!</p>
    //             </Alert>
    //         )
    //     }else if(status === "Tidak ada"){
    //         return(
    //             <Alert type="warning text-center" >
    //                 <p>Masukkan Badan dan Tinggi dulu!</p>
    //             </Alert>
    //         )
    //     }
    // }

    return(
        <div className="container" style={{fontFamily:`poppins`}}>
            <div className="card">
                <div className="card-header bg-dark mb-3">
                    <h3 className="text-white">Menghitung BMI</h3>
                </div>
                {/* Body Input */}
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-4 d-flex justify-content-center mt-2">
                            <h5 className="">Berat</h5>
                        </div>
                        <div className="col-7">
                            <input type={`number`} className="form-control" placeholder="Isi dalam satuan Kg" 
                            value={berat} onChange={ev => setBerat(ev.target.value)}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 d-flex justify-content-center mt-2">
                            <h5 className="">Tinggi</h5>
                        </div>
                        <div className="col-7">
                            <input type={`number`} className="form-control" placeholder="Isi dalam satuan meter"
                            value={tinggi} onChange={ev => setTinggi(ev.target.value)}/>
                        </div>
                    </div>
                    <button className="btn btn-success mb-2 form-control"
                    onClick={() => hitungBMI()}>
                        Hitung
                    </button>
                </div>
                {/* Button */}
                <div className="card-footer">
                    <h5 className="text-secondary">
                        {`BMI anda adalah ${bmi}`}
                        {alert()}
                    </h5>
                </div>
            </div>
        </div>
    )
}
