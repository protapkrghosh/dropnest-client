import track from "../../assets/live-tracking.png";
import delivery from "../../assets/person.png";
import callCenter from "../../assets/safe-delivery.png";
import Container from "../../components/Container";

const Benefits = () => {
   return (
      <Container>
         <div className="space-y-6 border-y-[1.4px] border-[#03464d8e] border-dashed py-20">
            <div className="bg-white p-8 rounded-3xl flex justify-between items-center">
               <div className="pr-8 md:pr-12">
                  <img
                     src={track}
                     alt="Image"
                     className="max-w-32 object-contain"
                  />
               </div>

               {/* Benefits Info */}
               <div className="border-l-[1.4px] border-[#03464d88] border-dashed pl-8 md:pl-12">
                  <h3 className="text-2xl font-extrabold text-secondary">
                     Live Parcel Tracking
                  </h3>

                  <p className="font-medium text-[#606060] mt-4">
                     Stay updated in real-time with our live parcel tracking
                     feature. From pick-up to delivery, monitor your shipment's
                     journey and get instant status updates for complete peace
                     of mind.
                  </p>
               </div>
            </div>

            <div className="bg-white p-8 rounded-3xl flex justify-between items-center">
               <div className="pr-8 md:pr-12">
                  <img
                     src={delivery}
                     alt="Image"
                     className="max-w-32 object-contain scale-150"
                  />
               </div>

               {/* Benefits Info */}
               <div className="border-l-[1.4px] border-[#03464d88] border-dashed pl-8 md:pl-12">
                  <h3 className="text-2xl font-extrabold text-secondary">
                     100% Safe Delivery
                  </h3>

                  <p className="font-medium text-[#606060] mt-4">
                     We ensure your parcels are handled with the utmost care and
                     delivered securely to their destination. Our reliable
                     process guarantees safe and damage-free delivery every
                     time.
                  </p>
               </div>
            </div>

            <div className="bg-white p-8 rounded-3xl flex justify-between items-center">
               <div className="pr-8 md:pr-12">
                  <img
                     src={callCenter}
                     alt="Image"
                     className="max-w-32 object-contain"
                  />
               </div>

               {/* Benefits Info */}
               <div className="border-l-[1.4px] border-[#03464d88] border-dashed pl-8 md:pl-12">
                  <h3 className="text-2xl font-extrabold text-secondary">
                     24/7 Call Center Support
                  </h3>

                  <p className="font-medium text-[#606060] mt-4">
                     Our dedicated and friendly support team is available around
                     the clock to assist you with any questions, updates,
                     technical issues, or delivery concerns—whenever and
                     wherever you need us.
                  </p>
               </div>
            </div>
         </div>
      </Container>
   );
};

export default Benefits;
