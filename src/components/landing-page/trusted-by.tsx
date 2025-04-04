const TrustedBy = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-6 px-10 pt-24">
            <h2 className="text-4xl font-bold text-[#4A4A4A] sm:text-5xl">
                Trusted by
            </h2>

            <p className="text-center text-xl font-medium text-[#4A4A4A]">
                Over 40k+ software business growing with Skribe
            </p>

            <div className="grid grid-cols-2 items-center justify-between justify-items-center gap-10 sm:grid-cols-3 sm:gap-16 lg:flex lg:gap-10 xl:w-[1181px]">
                <img
                    src="/landing-page/trusted-by-logos/hp.png"
                    alt="HP logo"
                />

                <img
                    src="/landing-page/trusted-by-logos/leadschool.png"
                    alt="LeadSchool logo"
                />

                <img
                    src="/landing-page/trusted-by-logos/boat.png"
                    alt="Boat logo"
                />

                <img
                    src="/landing-page/trusted-by-logos/schneider.png"
                    alt="Schneider electric Logo"
                />

                <img
                    src="/landing-page/trusted-by-logos/lenovo.png"
                    alt="Lenovo logo"
                />

                <img
                    src="/landing-page/trusted-by-logos/revolut.png"
                    alt="Revolut logo"
                />
            </div>
        </section>
    );
};

export default TrustedBy;
