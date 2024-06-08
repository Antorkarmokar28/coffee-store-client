import { IoEyeSharp } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const {
        _id,
        coffeeName,
        coffeeChef,
        // coffeeSupplier,
        // coffeeTaste,
        // coffeeCategory,
        // coffeeDetails,
        coffeePhoto,
        coffeePrice,
    } = coffee || {};
    const handleDeleteCoffee = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                        })
                        const remainingCoffees = coffees.filter(coffee => coffee._id !== _id);
                        setCoffees(remainingCoffees)
                    }
                })
            }

        });
    }
    return (
        <div className="flex items-center gap-6 bg-[#F5F4F1] px-4 py-4 rounded">
            <img className="w-1/4" src={coffeePhoto} alt="" />
            <div className="flex items-center gap-6">
                <div className="w-full">
                    <h5 className="text-sm text-black font-semibold mb-3">Name: <span className="text-slate-500">
                        {coffeeName}
                    </span></h5>
                    <h5 className="text-sm text-black font-semibold mb-3">Chef: <span className="text-slate-500">
                        {coffeeChef}
                    </span></h5>
                    <h5 className="text-sm text-black font-semibold mb-3">$ <span className="text-slate-500">
                        {coffeePrice}
                    </span></h5>
                </div>
                <div>
                    <button className="bg-[#D2B48C] p-2 rounded mb-3 block">
                        <IoEyeSharp className="text-white font-xl" />
                    </button>
                    <Link to={`/updateCoffe/${_id}`}>
                        <button className="bg-[#3C393B] p-2 rounded mb-3 block">
                            <MdEdit className="text-white font-xl" />
                        </button>
                    </Link>
                    <button onClick={() => handleDeleteCoffee(_id)} className="bg-[#EA4744] p-2 rounded block">
                        <MdDelete className="text-white font-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;