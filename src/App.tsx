import Navbar from "./components/layout/navbar";
import PrimaryHero from "./components/landing-page/primary-hero";
import SecondaryHero from "./components/landing-page/secondary-hero";
import TrustedBy from "./components/landing-page/trusted-by";

const App = () => {
    return (
        <main>
            <Navbar />
            <PrimaryHero />
            <SecondaryHero />
            <TrustedBy />
        </main>
    );
};

export default App;
