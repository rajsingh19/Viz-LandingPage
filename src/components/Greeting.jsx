import React, { useEffect } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FormSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col justify-center items-center px-4 text-center">
      
      {/* Logo */}
     <div className="flex justify-center mb-6">
          <img 
            src="/viz.png" 
            alt="Vizzle Logo" 
            className="w-35 h-28 "
          />
        </div>

     
      {/* Title */}
      <h1 className="text-3xl font-semibold text-black">Thanks for completing this form!</h1>

     
    </div>
  );
}
