
// import countryList from 'country-list'

const countries = countryList.getData();



const Checkout = ({cartItems}) => {


    return(
        <div>
            <div className="mx-[180px]">
                <div className="">
                  <h1 className="mt-10 py-10 font-primaryextrabold text-[36px]">CHECKOUT</h1>
                </div>
                <h2 className="text-[red] text-[20px] ">BILLING DETAILS</h2>
            </div> 
            <form action="" className="py-5">
                <div className="mx-[180px] mt-10 flex justify-between w-1/2 mb-10">
                    <div className="">
                     <label htmlFor="" className=" block mb-4">Name</label>
                     <input type="text"name="name"className=" px-5 py-4 border-2 w-[309px]"/>
                    </div>
                    <div>
                      <label htmlFor="" className=" block mb-4">Email Address</label>
                      <input type="text"name="name" className="px-5 py-4 border-2  w-[309px]" />
                    </div>
                </div>
                <div className="mx-[180px]">
                    <label htmlFor=""className="block mb-4">phone Number</label>
                    <input type="number" name="" className="px-5 py-4 border-2  w-[309px]"/>
                </div>
            </form>

            {/* shipping Details */}
            <div className="">
                <div className="mx-[180px] mt-[50px]">
                    <h2 className="py-5 text-[red] text-[20px]">SHIPPING INFO</h2>
                    <div className="mt-10">
                        <label htmlFor=""className="block mb-2">Address</label>
                        <input type="text" name="" className="px-5 py-5 border-2 w-[68%]"/>
                    </div>

                    <div className="flex gap-[113px] mt-10">
                        <div>
                            <label htmlFor="" className="block mb-2">ZIP Code</label>
                            <input type="tel" name="" className="px-5 py-5 border-2 w-[309px]" />
                        </div>
                        <div>
                            <label htmlFor="" className="block mb-2">City</label>
                            <input type="text" name="" className="px-5 py-5 border-2 w-[309px]" />
                        </div>
                    </div>

                    <div className="mt-10">
                        <label htmlFor="" className="block mb-2">country</label>
                        <input type="text" name="" className="py-5 px-5 border-2 w-[309px]" />
                    </div>
                </div>
            </div>

            {/* Payment Details */}
            <div className="mt-[100px]">
                <h2 className="mx-[180px] text-[red]">PAYMENT DETAILS</h2>
                <div className="mt-[50px] flex justify-between mx-[180px] w-1/2">
                    <p>payment Method</p>
                    <div>
                      <div className="border-2 py-5 px-5 w-[300px]"> 
                         <input type="radio" name="" className="w-5" />
                         <label htmlFor=""className="ml-5">payment</label>
                       </div>
                       <div className="border-2 py-5 px-5 w-[300px] mt-[30px]"> 
                         <input type="radio" name="" className="w-5" />
                         <label htmlFor=""className="ml-5">Cash on Delivery</label>
                       </div>  
                    </div>
                </div>

                <div className="mx-[180px] mt-10 flex justify-between w-1/2 mb-10">
                    <div className="">
                     <label htmlFor="" className=" block mb-2">E.Money Number</label>
                     <input type="number"name="name"className=" px-5 py-4 border-2 w-[309px]"/>
                    </div>
                    <div>
                      <label htmlFor="" className=" block mb-2 px-3">e-Money PIN</label>
                      <input type="number"name="name" className="px-5 py-4 border-2  w-[309px]" />
                    </div>
                </div>
            </div>

        </div>
    )

}
export default Checkout