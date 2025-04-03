const TrustedBy = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-6 pt-24">
            <h2 className="text-[#4A4A4A] font-bold text-5xl">Trusted by</h2>

            <p className="font-medium text-xl text-[#4A4A4A]">
                Over 40k+ software business growing with Skribe
            </p>

            <div className="flex items-center justify-between w-[1281px]">
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
