import { GiCoffeeCup } from "react-icons/gi";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Coffee = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)
    return (
        <div className="bg-coffee-pattern bg-repeat bg-cover w-full mb-20">
            <div className="container mx-auto p-5">
                <h1 className="font-Rancho text-[45px] text-center mb-4">Our Popular Products</h1>
                <Link className="w-[150px] mx-auto flex justify-center gap-4 items-center rounded border-2 border-black bg-[#E3B577] mb-14" to="/">
                    <button className="font-Rancho text-white text-2xl">Add Coffe</button>
                    <GiCoffeeCup />
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        coffees.map((coffee) => <CoffeeCard key={coffee?._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Coffee;