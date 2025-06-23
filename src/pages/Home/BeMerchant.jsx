import location from "../../assets/location-merchant.png";
import Container from "../../components/Container";

const BeMerchant = () => {
   return (
      <div>
         <Container>
            <div className="bg-[url(assets/be-a-merchant-bg.png)] bg-no-repeat bg-top-center md:flex justify-between items-center bg-secondary rounded-3xl p-20 my-20">
               <div className="md:w-1/2">
                  <h2 className="text-white text-[31px] 2xl:text-[39px] font-extrabold">
                     Merchant and Customer Satisfaction is Our First Priority
                  </h2>
                  <p className="max-w-[516px] text-[#b9b8b8] leading-7 mt-4 mb-8">
                     We offer the lowest delivery charge with the highest value
                     along with 100% safety of your product. Pathao courier
                     delivers your parcels in every corner of Bangladesh right
                     on time.
                  </p>

                  <div className="space-x-4">
                     <button className="font-bold text-lg text-black hover:text-white bg-primary hover:bg-[#caeb6644] border-2 border-transparent hover:border-primary px-7 py-3 rounded-full cursor-pointer duration-500">
                        Become a Merchant
                     </button>

                     <button className="font-bold text-lg hover:text-white text-primary hover:bg-[#caeb6644] bg-transparent border-2 border-primary px-7 py-3 rounded-full cursor-pointer duration-300">
                        Earn with Profast Courier
                     </button>
                  </div>
               </div>

               {/* Image */}
               <div className="md:w-1/2">
                  <img src={location} alt="Image" className="w-[90%] mx-auto" />
               </div>
            </div>
         </Container>
      </div>
   );
};

export default BeMerchant;
