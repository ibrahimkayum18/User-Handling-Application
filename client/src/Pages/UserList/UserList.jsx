import { useEffect, useState } from "react";
import Banner from "./Banner";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import SearchAndSort from "../../Components/SearchAndSort";
import useUsers from "../../Hooks/useUsers";
import Loading from "../../Components/Loading";

const UserList = () => {
  const [newUsers, serNewUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const { users, refetch, isLoading } = useUsers();
  
  useEffect(() => {
    const data = users.filter((item) =>
      item.firstName.toLowerCase().includes(searchQuery)
    );
    console.log(data);
  }, [users, searchQuery]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner />
      <h2 className="text-4xl text-center font-bold py-5">User Lists</h2>
      <SearchAndSort
        setSearchQuery={setSearchQuery}
        setSortBy={setSortBy}
        searchQuery={searchQuery}
        sortBy={sortBy}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5">
        { users.map((user) => (
          <div
            className="bg-gray-200 p-5 md:rounded-lg"
            key={user.id}
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <img
              className="h-40 w-40 rounded-full mx-auto"
              src={user?.image}
              alt=""
            />
            <Link to={`/details/${user.id}`}>
              <h2 className="text-2xl font-bold hover:underline cursor-pointer hover:text-blue-700">
                {user?.firstName} {user?.lastName}{" "}
              </h2>
            </Link>
            <h2>{user?.email}</h2>
            <h2>{user?.address?.address}</h2>
            <h2>{user?.company?.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
