import PropTypes from 'prop-types';
import { useState,useEffect } from "react"
import countryList from 'country-list'
import CartItemSummary from "./CartItemSummary";

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
        country: '',
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

        // console.log(popupMessage);

        useEffect(()=>{
            const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            const vat = subtotal * 0.15;
            const shipping = 10;
            const grandTotal = subtotal + summary.shipping + vat;
            setSummary({
                ...summary, 
                subtotal,
                vat,
                shipping,
                grandTotal,
            });
        }, [cartItems, summary])


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
              // form.country &&
              (form.paymentMethod === 'e-Money' ? form.emoneynumber && form.emoneypin : true)
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
            <div className="xl:mx-[180px] max-sm:px-[10px]">
                <div className="">
                  <h1 className="mt-10 py-10 font-primaryextrabold text-[36px] max-sm:px-[100px] max-lg:px-[100px]">CHECKOUT</h1>
                </div>
                <h2 className="text-[#D87D4A] text-[20px] max-sm:px-[30px] max-lg:px-[40px] ">BILLING DETAILS</h2>
            </div> 
            <form action="" className="py-5">
                <div className="max-sm:mx-10 max-lg:mx-10 xl:mx-[180px] mt-10 flex max-sm:flex-col max-sm:gap-10 max-lg:gap-10 xl:gap-5 w-1/2 mb-10">
                    <div className="">
                     <label htmlFor="" className=" block mb-4">Name</label>
                     <input 
                     type="text"name="Name"
                     value={form.Name}
                     onChange={handleChange}
                     className=" px-5 py-4 border-2 w-[309px]"
                     />
                    </div>
                    <div >
                      <label htmlFor="" className=" block mb-4">email</label>
                      <input 
                      type="email" 
                      value={form.email}
                      name="email" id=""
                      onChange={handleChange}
                      className="px-5 py-4 border-2 w-[309px] xl:w-[390px]" />
                    </div>
                </div>
                <div className="max-sm:mx-10 max-lg:mx-10 xl:mx-[180px]">
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
                <div className="max-sm:mx-10 max-lg:mx-[40px] xl:mx-[180px] mt-[50px]">
                    <h2 className="py-5 text-[#D87D4A] text-[20px] max-sm:mx-0 max-lg:mx-[10px]">SHIPPING INFO</h2>
                    <div className="mt-10 ">
                        <label htmlFor=""className="block mb-2">Address</label>
                        <input
                         type="text" name="address" 
                         value={form.address}
                         onChange={handleChange}
                         className="px-5 py-5 border-2 max-sm:w-full max-lg:w-[655px] xl:w-[720px]"/>
                    </div>

                    <div className="flex max-sm:flex-col max-sm:gap-10 max-lg:gap-10 xl:gap-[20px] mt-10">
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
                            className="px-5 py-5 border-2 w-[309px] xl:w-[390px]" />
                        </div>
                    </div>

                    <div className="mt-10">
                        <label htmlFor="" className=" mb-2">country</label>
                        <select
                          // options= {countryOptions}
                          value={form.country}
                          // value={ {value:form.country }}
                          onChange={handleCountryChange}
                          >
                           {countryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                             {option.label}
                            </option>
                           ))}
                           </select>
                        {/* <input type="text" name="" className="py-5 px-5 border-2 w-[309px]" /> */}
                    </div>
                </div>
            </div>

            {/* Payment Details */}
            <div className="mt-[100px]">
                <h2 className="max-sm:mx-10 max-lg:mx-[40px] xl:mx-[180px] text-[#D87D4A]">PAYMENT DETAILS</h2>
                <div className="mt-[50px] flex max-sm:flex-col justify-between max-sm:mx-10 max-lg:mx-10 xl:mx-[180px] max-lg:w-[655px] xl:w-1/2">
                    <p className="mb-5">payment Method</p>
                    <div>
                      <div className="border-2 py-5 px-5 w-[300px]"> 
                         <input 
                         type="radio" 
                         name="paymentMethod" 
                         value="e-money"
                         checked={form.paymentMethod ==="e-money"}
                         onChange={handlePaymentMethodChange}
                         className="w-5" />
                         <label htmlFor=""className="ml-5">E-money</label>
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

                <div className="max-sm:mx-10 max-lg:mx-10 xl:mx-[160px] mt-10 flex max-sm:flex-col max-lg:gap-10 justify-between w-1/2 mb-10">
                    <div className="max-sm:mb-5 xl:mx-5">
                     <label htmlFor="" className=" block mb-2">e.Money Number</label>
                     <input
                      type="number"name="emoneynumber"
                      value={form.emoneynumber}
                      onChange={handleChange}
                      className=" px-5 py-4 border-2 w-[309px]"/>
                    </div>
                    <div>
                      <label htmlFor="" className=" block mb-2 px-3">e-Money PIN</label>
                      <input 
                      type="number"name="emoneypin" 
                      value={form.emoneypin}
                      onChange={handleChange}
                      className="px-5 py-4 border-2  w-[309px] xl:w-[390px]"/>
                    </div>
                </div>
            </div>

            {/* SUMMARY */}
            <div className=" xl:absolute top-0 right-[109px] mt-10">
              <div>
                <h1 className="text-[30px] font-primaryextrabold max-sm:text-center max-lg:text-center">SUMMARY</h1>
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
                  <div className="max-sm:w-[300px] max-lg:w-[600px] xl:w-[330px] max-sm:ml-10 max-lg:ml-[80px]">
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

            <div className="">
              {showPopup && (
                <div className="w-[100%] px-[180px] fixed top-0 left-0 h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                  <div className=" flex flex-col items-center">
                    <h1 className="py-2">Payment Status</h1>
                    <p>{popupMessage}</p>
                    <CartItemSummary cartItems={cartItems}/>
                    <button
                     onClick={handlePopupClose}
                     className="px-4 py-2 bg-[#D87D4A] text-[#fff] w-[300px]"
                     >Close</button>
                  </div>
                </div>

              )}
            </div>
        </div>
    )

}
Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Checkout