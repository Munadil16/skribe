import Navbar from "./components/layout/navbar";
import PrimaryHero from "./components/landing-page/primary-hero";
import SecondaryHero from "./components/landing-page/secondary-hero";
import TrustedBy from "./components/landing-page/trusted-by";
import UnderstandSkribe from "./components/landing-page/understand-skribe";

const App = () => {
    return (
        <main>
            <Navbar />
            <PrimaryHero />
            <SecondaryHero />
            <TrustedBy />
            <UnderstandSkribe />
        </main>
    );
};

export default App;
