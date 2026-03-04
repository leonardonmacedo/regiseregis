import { useState } from "react";
import vehiclesData from "../data/vehicles";
import VehicleCard from "../components/Home/VehicleCard";
import Header from '../components/Home/Header'
import './Gallery.css'

function Gallery() {
    
    const [search, setSearch] = useState("");
    const [brand, setBrand] = useState("");
    const [year, setYear] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const filteredVehicles = vehiclesData.filter((vehicle) => {
        return (
            vehicle.name.toLowerCase().includes(search.toLowerCase()) &&
            (brand === "" || vehicle.brand === brand) &&
            (year === "" || vehicle.year === Number(year)) &&
            (maxPrice === "" || vehicle.price <= Number(maxPrice))
        );
    });

    const brands = [...new Set(vehiclesData.map((v) => v.brand))];
    const years = [...new Set(vehiclesData.map((v) => v.year))];

    return (
        <div className="gallery">
            
            <Header />
            <h1>Galeria de Veículos</h1>

            {/* FILTROS */}
            <div className="filters">
                <input
                    type="text"
                    placeholder="Pesquisar modelo..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select onChange={(e) => setBrand(e.target.value)}>
                    <option value="">Marca</option>
                    {brands.map((b, index) => (
                        <option key={index} value={b}>
                            {b}
                        </option>
                    ))}
                </select>

                <select onChange={(e) => setYear(e.target.value)}>
                    <option value="">Ano</option>
                    {years.map((y, index) => (
                        <option key={index} value={y}>
                            {y}
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    placeholder="Preço máximo"
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>

            {/* CARDS */}
            <div className="card-container">
                {filteredVehicles.map((vehicle) => (
                    <VehicleCard
                        key={vehicle.id}
                        vehicle={vehicle}
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;
