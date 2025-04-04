const PrimaryHero = () => {
    return (
        <section className="flex items-start justify-between gap-4 bg-[#EDF5FF] px-5 pt-10 pb-10 sm:px-20 sm:pt-[120px] sm:pb-20 lg:pr-0 lg:pb-0 lg:pl-14 xl:pl-[100px]">
            <article className="flex flex-col items-center gap-6 lg:items-start">
                <h1 className="text-center text-5xl leading-none font-extrabold text-balance text-[#002B5B] sm:h-[104px] lg:text-start lg:text-[52px]">
                    Redefining The Future of Contact Centers
                </h1>

                <p className="text-center text-lg text-balance text-[#002B5B] sm:h-[72px] sm:w-[589px] sm:text-xl lg:text-start">
                    Skribe users typically boost their PR ROIs by ~3x and also
                    save 100s hours a month. Skribe users typically boost their
                    PR ROIs by ~3x and also save 100s hours a month
                </p>

                <button
                    className="mt-10 cursor-pointer rounded-md border border-[#002B5B] px-6 py-3 text-xl font-semibold text-[#002B5B]"
                    type="button"
                >
                    Request Demo
                </button>
            </article>

            <img
                className="mt-8 hidden h-[530px] overflow-hidden object-fill lg:block"
                src="/landing-page/hero/dashboard.png"
                alt="dashboard image"
            />
        </section>
    );
};

export default PrimaryHero;
