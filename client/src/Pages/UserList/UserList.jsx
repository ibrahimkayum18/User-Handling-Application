import { useEffect, useState } from "react";
import Banner from "./Banner";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
// import SearchAndSort from "../../Components/SearchAndSort";
import useUsers from "../../Hooks/useUsers";
import Loading from "../../Components/Loading";
import { FaPlus } from "react-icons/fa";

const UserList = () => {
  // const [newUsers, serNewUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { users, refetch, isLoading } = useUsers();
  const [sortBy, setSortBy] = useState(users);
  console.log("Usrrs ", users);

  // useEffect(() => {
  //   const data = users.filter(item => console.log(item.company.name.toLowerCase()))
  // },[users])

  // useEffect(() => {
  //   const data = users.filter((item) =>
  //     item.firstName.toLowerCase().includes(searchQuery)
  //   );
  //   console.log(data);
  // }, [users, searchQuery]);
  if (isLoading) {
    return <Loading />;
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // handleSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    // handleSort(e.target.value);
  };

  return (
    <div>
      <Banner />
      <div className="flex justify-between items-center px-5">
        <h2 className="text-4xl text-center font-bold py-5">User Lists</h2>
        <Link to={"/addUser"}>
          <button className="flex items-center gap-3 font-bold px-5 p-2 border rounded focus:outline-none focus:border-blue-500 ">
            <FaPlus /> Add Users
          </button>
        </Link>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-stretch md:items-center mb-8 px-5 justify-between">
          <div className="flex-1 md:mr-4 mb-2 md:mb-0">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="p-2 border rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Sort By</option>
              <option value="name">Sort by Name</option>
              <option value="email">Sort by Email</option>
              <option value="company">Sort by Company Name</option>
            </select>
          </div>
        </div>
      </div>
      {/* <SearchAndSort
        setSearchQuery={setSearchQuery}
        setSortBy={setSortBy}
        searchQuery={searchQuery}
        sortBy={sortBy}
      /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5">
        {users.map((user) => (
          <div
            className="bg-gray-200 p-5 md:rounded-lg"
            key={user.id}
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <img
              className="h-40 w-40 rounded-full mx-auto"
              src={user?.avatar}
              alt=""
            />
            <Link to={`/details/${user._id}`}>
              <h2 className="text-2xl font-bold hover:underline cursor-pointer hover:text-blue-700">
                {user?.first_name} {user?.last_name}{" "}
              </h2>
            </Link>
            <h2>{user?.email}</h2>
            <h2>{user?.address}</h2>
            <h2>{user?.company_name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
