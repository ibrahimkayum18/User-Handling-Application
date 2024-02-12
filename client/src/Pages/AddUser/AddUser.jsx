import Lottie from "lottie-react";
import useradd from "./Add_User.json";
import { imageUpload } from "../../Components/imageUpload";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const handleAddUser = async e => {
        e.preventDefault();
        const form = e.target;
        const first_name = form.first_name.value;
        const last_name = form.last_name.value;
        const email = form.email.value;
        const company_name = form.company_name.value;
        const address = form.address.value;
        const img = form.avatar.files[0]
        const image = await imageUpload(img)
        const avatar = image.data.display_url;
        const data = {first_name, last_name, email, company_name, address, avatar}

        axiosPublic.post('/users', data)
        .then(res => {
            if(res.data.insertedId){
                toast.success("User Added successfully under if condition")
               navigate('/')  
            }
        })
        
    }

  return (
    <div className="lg:flex justify-center items-center gap-6 overflow-hidden bg-sky-300">
      <div className="lg:w-1/2 lg:m-10 mx-auto bg-gray-100 lg:rounded-lg overflow-hidden " data-aos="fade-left">
        <div className="md:flex">
          <div className="w-full px-6 py-8">
            <h2 className="text-center font-semibold text-2xl">Add New User</h2>
            <form onSubmit={handleAddUser} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    placeholder="Enter First Name..."
                    className="p-2 border rounded focus:outline-none focus:border-blue-500 w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    placeholder="Enter Last Name..."
                    className="p-2 border rounded focus:outline-none focus:border-blue-500 w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Email Address..."
                    className="p-2 border rounded focus:outline-none focus:border-blue-500 w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    id="company_name"
                    name="company_name"
                    type="text"
                    placeholder="Enter Company Name..."
                    className="p-2 border rounded focus:outline-none focus:border-blue-500 w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter Address..."
                    className="p-2 border rounded focus:outline-none focus:border-blue-500 w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="avatar"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Avatar
                  </label>
                  <input
                    id="avatar"
                    name="avatar"
                    type="file"
                    className="p-2 border rounded focus:outline-none focus:border-blue-500 w-full"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2" data-aos="fade-up   ">
        <Lottie animationData={useradd} />
      </div>
    </div>
  );
};

export default AddUser;
