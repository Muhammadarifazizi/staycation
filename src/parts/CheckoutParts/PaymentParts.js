import React from 'react';
import Fade from 'react-reveal/Fade';
import InputText from 'smartComponent/Form/InputText';
import InputFile from 'smartComponent/Form/InputFile';
import logoBCA from "assets/images/logo_bca.png";
import logoMandiri from "assets/images/logo_mandiri.png";

export default function PaymentParts(props) {

    const {data, ItemDetails, checkout } = props;
    const tax = 10;
    const subTotal = ItemDetails.price * checkout.duration;
    const grandTotal = ((tax+100)/100)*subTotal;

    return (
        <Fade>
            <div className="container" style={{marginBottom:30}}>
                <div className="row justify-content-center align-items-center">
                     <div className="col-5 border-right py-5" style={{paddingRight:80}}>
                         <Fade delay={300}>
                             <p className="mb-4">Transfer Pembayaran:</p>
                             <p>Tax : {tax}%</p>
                             <p>Sub Total : ${subTotal} USD</p>
                             <p>Total : ${grandTotal} USD</p>
                             <div className="row mt-4">
                                 <div className="col-3 text-right">
                                     <img src={logoBCA} alt="Bank Central Asia" width="60" />
                                 </div>
                                 <div className="col">
                                     <dl>
                                         <dd>Bank Central Asia</dd>
                                         <dd>2208 1996</dd>
                                         <dd>BuildWith Angga</dd>
                                     </dl>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-3 text-right">
                                     <img src={logoMandiri} alt="Bank Mandiri" width="60" />
                                 </div>
                                 <div className="col">
                                     <dl>
                                         <dd>Bank Mandiri</dd>
                                         <dd>2208 1996</dd>
                                         <dd>BuildWith Angga</dd>
                                     </dl>
                                 </div>
                             </div>
                         </Fade>
                     </div>
                     <div className="col-5 py-5" style={{paddingLeft:80}}>
                         <Fade delay={600}>
                             <label htmlFor="proofPayment">Upload Bukti Transfer</label>
                             <InputFile 
                                accept="image/*"
                                id="proofPayment"
                                name="proofPayment"
                                onChange={props.onChange}
                             />
                             <label htmlFor="bankName">Asal Bank</label>
                             <InputText
                                id="bankName"
                                name="bankName"
                                type="text"
                                value={data.bankName}
                                onChange={props.onChange}
                             />
                             <label htmlFor="bankHolder">Nama Pengirim</label>
                             <InputText 
                                id="bankHolder"
                                name="bankHolder"
                                type="text"
                                value={data.bankHolder}
                                onChange={props.onChange}
                             />
                         </Fade>
                     </div>
                </div>
            </div>
        </Fade>
    )
}
