import icon from "../../../assets/service.png";

const ServiceCard = ({ service }) => {
   const { title, description } = service;

   return (
      <div className="bg-white hover:bg-primary duration-300 rounded-3xl text-center px-6 py-8">
         <div className="bgColor w-fit p-6 mx-auto">
            <img src={icon} alt="" className="w-10 mx-auto scale-110" />
         </div>

         <h3 className="text-[24px] text-secondary font-bold my-4">{title}</h3>
         <p className="text-base-300 font-medium leading-7">{description}</p>
      </div>
   );
};

export default ServiceCard;
