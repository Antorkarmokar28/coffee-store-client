import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {
        _id,
        coffeeName,
        coffeeChef,
        coffeeSupplier,
        coffeeTaste,
        coffeeCategory,
        coffeeDetails,
        coffeePhoto,
        coffeePrice,
    } = coffee || {};
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const coffeeName = form.name.value;
        const coffeeChef = form.chef.value;
        const coffeeSupplier = form.supplier.value;
        const coffeeTaste = form.taste.value;
        const coffeeCategory = form.category.value;
        const coffeeDetails = form.details.value;
        const coffeePhoto = form.photo.value;
        const coffeePrice = form.price.value;
        const updatedCoffee = {
            coffeeName,
            coffeeChef,
            coffeeSupplier,
            coffeeTaste,
            coffeeCategory,
            coffeeDetails,
            coffeePhoto,
            coffeePrice,
        }
        console.log(updatedCoffee)
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Coffee updated successfully",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                    form.reset();
                }
            })
    }
    return (
        <>
            <div className="bg-form-pattern bg-cover w-full h-[80vh]">
                <div className="container mx-auto px-5 py-5 bg-[#F4F3F0]">
                    <h2 className="text-center text-[45px] font-normal mb-8  font-Rancho">Update Coffee</h2>
                    <p className="mb-8 text-lg text-center font-normal">
                        {coffeeName}
                    </p>
                    <form onSubmit={handleUpdateCoffee}>
                        {/* coffe name and chef row */}
                        <div className="md:flex gap-6">
                            <div className="w-full md:w-1/2">
                                <label htmlFor="coffee_name" className="mb-1 block text-xl">name</label>
                                <input type="text" defaultValue={coffeeName} placeholder="Enter coffee name" id="coffee_name" name="name" className="bg-white rounded px-3 py-2 text-sm outline-none block w-full mt-3" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <label htmlFor="chef" className="mb-1 block text-xl">Chef</label>
                                <input type="text" defaultValue={coffeeChef} placeholder="Enter coffee chef" id="chef" name="chef" className="bg-white rounded px-3 py-2 text-sm outline-none block w-full mt-3" />
                            </div>
                        </div>
                        {/* coffe supplier and taste row */}
                        <div className="md:flex gap-6 mt-3">
                            <div className="w-full md:w-1/2">
                                <label htmlFor="supplier" className="mb-1 block text-xl">Supplier</label>
                                <input type="text" defaultValue={coffeeSupplier} placeholder="Enter coffee supplier" id="supplier" name="supplier" className="bg-white rounded px-3 py-2 text-sm outline-none block w-full mt-3" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <label htmlFor="taste" className="mb-1 block text-xl">Taste</label>
                                <input type="text" defaultValue={coffeeTaste} placeholder="Enter coffee taste" id="taste" name="taste" className="bg-white rounded px-3 py-2 text-sm outline-none block w-full mt-3" />
                            </div>
                        </div>
                        {/* coffe category and details row */}
                        <div className="md:flex gap-6 mt-3">
                            <div className="w-full md:w-1/2">
                                <label
                                    htmlFor="category"
                                    className="mb-1 block text-xl"
                                >
                                    Category
                                </label>
                                <input type="text" defaultValue={coffeeCategory} placeholder="Enter coffee category" id="category" name="category" className="bg-white rounded px-3 py-2 text-sm outline-none block w-full mt-3" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <label htmlFor="details" className="mb-1 block text-xl">Details</label>
                                <input type="text" defaultValue={coffeeDetails} placeholder="Enter coffee details" id="details" name="details" className="bg-white rounded px-3 py-2 text-sm outline-none block w-full mt-3" />
                            </div>
                        </div>
                        {/* coffe photo and price row */}
                        <div className="md:flex gap-6 mt-3">
                            <div className="w-full md:w-1/2">
                                <label
                                    htmlFor="photo"
                                    className="mb-1 block text-xl"
                                >
                                    Photo
                                </label>
                                <input type="text" defaultValue={coffeePhoto} placeholder="Enter photo URL" id="photo" name="photo" className="bg-white rounded px-3 py-2 text-sm outline-none block w-full mt-3" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <label htmlFor="price" className="mb-1 block text-xl">Price</label>
                                <input type="text" defaultValue={coffeePrice} placeholder="Enter coffee price" id="price" name="price" className="bg-white rounded px-3 py-2 text-sm outline-none block w-full mt-3" />
                            </div>
                        </div>
                        <input className="block w-full py-3 rounded-lg mt-9 font-Rancho text-2xl font-normal bg-[#D2B48C] border-2 border-black" type="submit" value={`Update Coffee`} />
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateCoffee;