import Navbar from "./components/layout/navbar";
import PrimaryHero from "./components/landing-page/primary-hero";
import SecondaryHero from "./components/landing-page/secondary-hero";

const App = () => {
    return (
        <main>
            <Navbar />
            <PrimaryHero />
            <SecondaryHero />
        </main>
    );
};

export default App;
