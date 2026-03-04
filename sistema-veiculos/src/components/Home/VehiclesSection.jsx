import { useNavigate } from "react-router-dom";
import VehicleCard from "./VehicleCard";
import vehicles from "../../data/vehicles";
import './VehiclesSection.css'

function VehiclesSection() {
    const navigate = useNavigate();

    return (
        <section className="vehicles">
            <h2>Veículos Disponíveis</h2>

            <div className="card-container">
                {vehicles.slice(0, 3).map((vehicles) => (
                    <VehicleCard
                        key={vehicles.id}
                        vehicle={vehicles}
                    />
                ))}
            </div>

            <button className="ver-mais" onClick={() => navigate("/galeria")}>
                Ver Mais
            </button>
        </section>
    );
}

export default VehiclesSection;
