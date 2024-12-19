import { useState,useEffect } from "react"
import countryList from 'country-list'

const countries = countryList.getData();



const Checkout = ({cartItems}) => {
  // console.log(cartItems)

    const [form, setForm] = useState({
        Name: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
        country: 'united Kingdom',
        paymentMethod : '',
        emoneypin: '',
        emoneynumber: '',
      });
      
      // console.log(form);

    const [summary, setSummary] = useState({
        subtotal: 0,    
        shipping: 0,
        vat: 0,
        grandTotal: 0,});
        
        const [showPopup, setShowPopup] = useState();
        const [popupMessage, setPopupMessage] = useState('');

        useEffect(()=>{
            const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            const vat = subtotal * 0.15;
            const grandTotal = subtotal + summary.shipping + vat;
            setSummary({
                ...summary, 
                subtotal,
                vat,
                grandTotal,
            });
        }, [cartItems])


        const handleChange = (e) => {
            const { name, value } = e.target;
            setForm({
              ...form,
              [name]: value,
            });
          };

          const handleCountryChange = (selectedOption) => {
            setForm({
              ...form,
              country: selectedOption.value,
            });
          };

          const handlePaymentMethodChange = (e) => {
            const { value } = e.target;
            setForm({
              ...form,
              paymentMethod: value,
            });
          };

          const handleSubmit = () => {
            if (
              form.Name &&
              form.email &&
              form.phone &&
              form.address &&
              form.zip &&
              form.city &&
              form.country &&
              (form.paymentMethod === 'e-Money' ? form.emoneyNumber && form.emoneyPin : true)
            ) {
              setPopupMessage('Order success');
              setShowPopup(true);
            } else {
              setPopupMessage('Please enter billing details');
              setShowPopup(true);
            }
          };

          const countryOptions = countries.map((country) => ({
            value: country.code,
            label: country.name,
          }));

          const handlePopupClose = () => {
            setShowPopup(false);
          };
        
    return(
        <div className=" relative">
            <div className="mx-[180px]">
                <div className="">
                  <h1 className="mt-10 py-10 font-primaryextrabold text-[36px]">CHECKOUT</h1>
                </div>
                <h2 className="text-[#D87D4A] text-[20px] ">BILLING DETAILS</h2>
            </div> 
            <form action="" className="py-5">
                <div className="mx-[180px] mt-10 flex justify-between w-1/2 mb-10">
                    <div className="">
                     <label htmlFor="" className=" block mb-4">Name</label>
                     <input 
                     type="text"name="Name"
                     value={form.Name}
                     onChange={handleChange}
                     className=" px-5 py-4 border-2 w-[309px]"
                     />
                    </div>
                    <div>
                      <label htmlFor="" className=" block mb-4">email</label>
                      <input 
                      type="email" 
                      value={form.email}
                      name="email" id=""
                      onChange={handleChange}
                      className="px-5 py-4 border-2 w-[309px]" />
                    </div>
                </div>
                <div className="mx-[180px]">
                    <label htmlFor=""className="block mb-4">phone Number</label>
                    <input 
                    type="number"name="phone" 
                    value={form.phone}
                    onChange={handleChange}
                    className="px-5 py-4 border-2  w-[309px]"/>
                </div>
            </form>

            {/* shipping Details */}
            <div className="">
                <div className="mx-[180px] mt-[50px]">
                    <h2 className="py-5 text-[#D87D4A] text-[20px]">SHIPPING INFO</h2>
                    <div className="mt-10">
                        <label htmlFor=""className="block mb-2">Address</label>
                        <input
                         type="text" name="address" 
                         value={form.address}
                         onChange={handleChange}
                         className="px-5 py-5 border-2 w-[68%]"/>
                    </div>

                    <div className="flex gap-[113px] mt-10">
                        <div>
                            <label htmlFor="" className="block mb-2">ZIP Code</label>
                            <input 
                            type="tel" name="zip" 
                            value={form.zip}
                            onChange={handleChange}
                            className="px-5 py-5 border-2 w-[309px]" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2">City</label>
                            <input type="text" name="city" 
                            value={form.city}
                            onChange={handleChange}
                            className="px-5 py-5 border-2 w-[309px]" />
                        </div>
                    </div>

                    <div className="mt-10">
                        <label htmlFor="" className=" mb-2">country</label>
                        <select
                        option={countryOptions}
                        value={{label:form.country, value:form.country}}
                        onChange={handleCountryChange}
                        />
                        {/* <input type="text" name="" className="py-5 px-5 border-2 w-[309px]" /> */}
                    </div>
                </div>
            </div>

            {/* Payment Details */}
            <div className="mt-[100px]">
                <h2 className="mx-[180px] text-[#D87D4A]">PAYMENT DETAILS</h2>
                <div className="mt-[50px] flex justify-between mx-[180px] w-1/2">
                    <p>payment Method</p>
                    <div>
                      <div className="border-2 py-5 px-5 w-[300px]"> 
                         <input 
                         type="radio" 
                         name="paymentMethod" 
                         value="E.money"
                         checked={form.paymentMethod ==="E.money"}
                         onChange={handlePaymentMethodChange}
                         className="w-5" />
                         <label htmlFor=""className="ml-5">E.money</label>
                       </div>
                       <div className="border-2 py-5 px-5 w-[300px] mt-[30px]"> 
                         <input type="radio" 
                         name="paymentMethod" 
                         value="cash on Delivery"
                         checked={form.paymentMethod === 'cash on Delivery'}
                         onChange={handlePaymentMethodChange}
                         className="w-5" />
                         <label htmlFor=""className="ml-5">Cash on Delivery</label>
                       </div>  
                    </div>
                </div>

                <div className="mx-[180px] mt-10 flex justify-between w-1/2 mb-10">
                    <div className="">
                     <label htmlFor="" className=" block mb-2">e.Money Number</label>
                     <input
                      type="number"name="name"
                      value={form.eMoneyNumber}
                      onChange={handleChange}
                      className=" px-5 py-4 border-2 w-[309px]"/>
                    </div>
                    <div>
                      <label htmlFor="" className=" block mb-2 px-3">e-Money PIN</label>
                      <input 
                      type="number"name="name" 
                      value={form.eMoneyPin}
                      onChange={handleChange}
                      className="px-5 py-4 border-2  w-[309px]" />
                    </div>
                </div>
            </div>

            {/* SUMMARY */}
            <div className="absolute top-0 right-[109px] mt-10">
              <div>
                <h1 className="text-[30px] font-primaryextrabold">SUMMARY</h1>
                <div className="py-5">
                  {cartItems.map((item,index) => (
                    <div key={index} className="  xl:w-[300px] justify-between flex  items-center py-2">
                      <div>
                        <img src={item.image} alt="" className="w-[80px]" />
                      </div>
                      <div>
                        <h2 className="text-[13px]">{item.name}</h2>
                        <span>$ {item.price}</span>
                      </div>
                       <p>x{item.quantity}</p>
                    </div>
                  ))}

                  {/* ToTal */}
                  <div>
                    <div className="flex justify-between mt-12">
                      <h2 className="text-[20px] font-primarybold text-[#a3a0a0]">TOTAL</h2>
                      <span>${summary.subtotal.toFixed()}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <h2 className="text-[20px] font-primarybold text-[#a3a0a0]">SHIPPING</h2>
                      <span>${summary.shipping.toFixed()}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <h2 className="text-[20px] font-primarybold text-[#a3a0a0]">VAT (INCLUDED)</h2>
                      <span>${summary.vat.toFixed()}</span>
                    </div>
                    <div className="flex justify-between mt-2 pb-10">
                      <h2 className="text-[20px] font-primarybold text-[#a3a0a0]">GRAND TOTAL</h2>
                      <span className="text-[#D87D4A]">${summary.grandTotal.toFixed()}</span>
                    </div> 

                    <button 
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-[#D87D4A] text-[#fff] w-full"> CONTINUE & PAY</button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {showPopup && (
                <div>
                  <div>
                    <h1>Payment Status</h1>
                    <p>{popupMessage}</p>
                  </div>
                </div>

              )}
            </div>
        </div>
    )

}
export default Checkout