import { useEffect, useState } from "react";
import "./Carousel.css";

const images = [
    "/src/assets/images/carro1.jpg",
    "/src/assets/images/carro2.jpg",
    "/src/assets/images/carro3.jpg",
];

const whatsappNumber = "5551993815206"; // coloque o número real com DDI + DDD

const handleWhatsApp = () => {
    const message = encodeURIComponent(
        "Olá! Estou interessado em trocar de carro e gostaria de falar com um vendedor."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
};

function Carousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);



    return (
        <div className="carousel">
            <img src={images[current]} alt="Veículo" />

            <div className="carousel-content">
                <p>
                    Está pensando em trocar de carro? Temos as melhores opções!
                    Faça uma análise agora com um vendedor.
                </p>

                <button onClick={handleWhatsApp}>
                    Falar com o vendedor
                </button>
            </div>
        </div>
    );
}

export default Carousel;
