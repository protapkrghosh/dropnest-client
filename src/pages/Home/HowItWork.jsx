import Container from "../../components/Container";

const HowItWork = () => {
   return (
      <Container>
         <div>
            <h1 className="text-secondary text-[32px] font-extrabold mb-8">
               How It Works
            </h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
               <div className="bg-white rounded-3xl p-6">
                  <img
                     src="https://img.icons8.com/?size=100&id=7493&format=png&color=000000"
                     alt=""
                     className="w-12"
                  />

                  <h3 className="text-[19px] text-secondary font-bold mt-6 mb-4">
                     Booking Pick & Drop
                  </h3>
                  <p className="text-base-300 font-medium">
                     From personal packages to business shipments — we deliver
                     on time, every time.
                  </p>
               </div>

               <div className="bg-white rounded-3xl p-6">
                  <img
                     src="https://img.icons8.com/?size=100&id=IJeKDLHGtzsF&format=png&color=000000"
                     alt=""
                     className="w-12 scale-105"
                  />

                  <h3 className="text-[19px] text-secondary font-bold mt-6 mb-4">
                     Cash On Delivery
                  </h3>
                  <p className="text-base-300 font-medium">
                     From personal packages to business shipments — we deliver
                     on time, every time.
                  </p>
               </div>

               <div className="bg-white rounded-3xl p-6">
                  <img
                     src="https://img.icons8.com/?size=100&id=pPr2QkTOKzia&format=png&color=000000"
                     alt=""
                     className="w-12 scale-110"
                  />

                  <h3 className="text-[19px] text-secondary font-bold mt-6 mb-4">
                     Delivery Hub
                  </h3>
                  <p className="text-base-300 font-medium">
                     From personal packages to business shipments — we deliver
                     on time, every time.
                  </p>
               </div>

               <div className="bg-white rounded-3xl p-6">
                  <img
                     src="https://img.icons8.com/?size=100&id=58347&format=png&color=000000"
                     alt=""
                     className="w-12"
                  />

                  <h3 className="text-[19px] text-secondary font-bold mt-6 mb-4">
                     Booking SME & Corporate
                  </h3>
                  <p className="text-base-300 font-medium">
                     From personal packages to business shipments — we deliver
                     on time, every time.
                  </p>
               </div>
            </div>
         </div>
      </Container>
   );
};

export default HowItWork;