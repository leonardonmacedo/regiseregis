import { useState } from "react";
import VehicleModal from "./VehicleModal";
import "./VehicleCard.css";

function VehicleCard({ vehicle }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="card">
                <img src={vehicle.images[0]} alt={vehicle.name} />
                <h3>{vehicle.brand} {vehicle.name}</h3>
                <p>R$ {vehicle.price}</p>
                <button onClick={() => setOpen(true)}>Ver Detalhes</button>
            </div>

            {open && (
                <VehicleModal
                    vehicle={vehicle}
                    onClose={() => setOpen(false)}
                />
            )}
        </>
    );
}

export default VehicleCard;
