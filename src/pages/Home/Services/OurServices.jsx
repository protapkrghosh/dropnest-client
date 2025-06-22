import axios from "axios";
import Container from "../../../components/Container";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
   const [serviceData, setServiceData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const { data } = await axios.get("services.json");
         setServiceData(data);
      };

      fetchData();
   }, []);

   return (
      <Container>
         <div className="bg-secondary rounded-3xl px-3 md:px-6 2xl:px-24 py-12 md:py-24 my-24">
            <div className="text-center mb-8">
               <h1 className="text-white text-4xl font-extrabold">
                  Our Services
               </h1>
               <p className="text-gray-300 font-medium mt-4 max-w-3xl mx-auto leading-7">
                  Enjoy fast, reliable parcel delivery with real-time tracking
                  and zero hassle. From personal packages to business shipments
                  — we deliver on time, every time.
               </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {serviceData.map((service, index) => (
                  <ServiceCard key={index} service={service} />
               ))}
            </div>
         </div>
      </Container>
   );
};

export default OurServices;
