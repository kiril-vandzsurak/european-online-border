import { useState } from "react";
import { useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <RingLoader
            className="loading"
            color="#36d7b7"
            size={200}
            loading={isLoading}
          />
          <p className="loadingText">Loading...</p>
        </div>
      ) : (
        <div>
          <h1>Register</h1>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
