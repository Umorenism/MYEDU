import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-blue-600 min-h-screen w-full justify-center items-center flex">
      <h1 className="text-3xl font-bold text-white tracking-widest flex items-center justify-center">
        UMOEDU
        <div className="flex mr-2 justify-center items-center h-12 w-12 bg-orange-400 rounded-full text-sm m-2">
          TECH
        </div>
      </h1>
    </div>
  );
};

export default WelcomePage;
