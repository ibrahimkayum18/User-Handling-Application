import { useParams } from "react-router-dom";
import useUsers from "../../Hooks/useUsers";
import Loading from "../../Components/Loading";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import user1 from "./user.json";

const Details = () => {
  const [user, setUser] = useState([]);

  const { id } = useParams();
  console.log(id);
  const { users, refetch, isLoading } = useUsers();
  useEffect(() => {
    setUser(users.find((item) => item?._id == id));
  }, [id, users]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="lg:h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white overflow-hidden">
      <h2 className="text-center text-3xl font-bold py-5">
        Details of <span className="gradient">{user?.first_name} {user?.last_name}</span>{" "}
      </h2>
      <div className="lg:flex lg:flex-row-reverse justify-around items-center w-full mx-auto ">
        <div className="w-full lg:w-1/2 overflow-hidden">
          <img data-aos="fade-right" data-aos-duration="2500" className="mb-8 rounded-full w-72 h-72 border-8 border-orange-500 mx-auto" src={user?.avatar} alt="" />
          <div className="space-y-3 px-5 lg:px-0">
            <div className="flex justify-start gap-6 text-xl">
              <h2>
                FIrst Name: <span className="font-bold gradient">{user?.first_name}</span>
              </h2>
              <h2>
                Last Name: <span className="font-bold gradient">{user?.last_name}</span>{" "}
              </h2>
            </div>
            <h2>
              Email: <span className="font-bold gradient">{user?.email}</span>{" "}
            </h2>
            <h2>
              Address:{" "}
              <span className="font-bold gradient">{user?.address}</span>
            </h2>
            <h2>
              Company Name:{" "}
              <span className="font-bold gradient">{user?.company_name}</span>
            </h2>
          </div>
        </div>
        <div className="w-full mt-8 lg:mt-0 lg:w-1/2 overflow-hidden mx-auto">
          <Lottie className="w-3/4 mx-auto" animationData={user1} />
        </div>
      </div>
    </div>
  );
};

export default Details;
