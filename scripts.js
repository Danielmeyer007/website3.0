import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
        console.log("Home page loaded");
    }, []); // Se ejecuta solo una vez al montar el componente

    return <div>Welcome to the Home Page</div>;
};

export default HomePage;
