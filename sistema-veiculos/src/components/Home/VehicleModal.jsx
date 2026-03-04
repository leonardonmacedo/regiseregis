import { useState } from "react";
import "./VehicleModal.css";
import Carousel from "./Carousel";


const whatsappNumber = "5551993815206"; // coloque o número real com DDI + DDD

const handleWhatsApp = () => {
    const message = encodeURIComponent(
        "Olá! Estou interessado em trocar de carro e gostaria de falar com um vendedor."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
};


function VehicleModal({ vehicle, onClose }) {
    const [current, setCurrent] = useState(0);

    const nextImage = () => {
        setCurrent((prev) =>
            prev === vehicle.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrent((prev) =>
            prev === 0 ? vehicle.images.length - 1 : prev - 1
        );
    };

    return (
        <div className="modal-overlay">
            <div className="modal-card">
                <button className="close-btn" onClick={onClose}>X</button>

                {/* Carousel manual */}
                <div className="modal-carousel">
                    <button onClick={prevImage}>◀</button>
                    <img
                        src={vehicle.images[current]}
                        alt={vehicle.name}
                    />
                    <button onClick={nextImage}>▶</button>
                </div>

                {/* Informações */}
                <div className="modal-info">
                    <h2>{vehicle.brand} {vehicle.name}</h2>
                    <p className="price">R$ {vehicle.price}</p>

                    <ul>
                        <li>✔ 4 portas</li>
                        <li>✔ Ar condicionado</li>
                        <li>✔ Direção hidráulica</li>
                        <li>✔ Vidros elétricos</li>
                    </ul>
                    <button onClick={handleWhatsApp}>
                        Falar com o vendedor
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VehicleModal;
