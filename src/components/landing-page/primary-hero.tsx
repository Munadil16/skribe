const PrimaryHero = () => {
    return (
        <section className="flex items-start justify-between gap-4 pt-[120px] pl-[100px] bg-[#EDF5FF]">
            <article className="flex flex-col gap-6 items-start">
                <h1 className="w-[589px] h-[104px] text-[52px] leading-none text-balance font-extrabold text-[#002B5B]">
                    Redefining The Future of Contact Centers
                </h1>

                <p className="w-[589px] h-[72px] text-balance text-xl text-[#002B5B]">
                    Skribe users typically boost their PR ROIs by ~3x and also
                    save 100s hours a month. Skribe users typically boost their
                    PR ROIs by ~3x and also save 100s hours a month
                </p>

                <button
                    className="text-[#002B5B] mt-10 cursor-pointer py-3 px-6 border border-[#002B5B] rounded-md font-semibold text-xl"
                    type="button"
                >
                    Request Demo
                </button>
            </article>

            <img
                className="w-[880px] h-[530px] mt-8 overflow-hidden"
                src="/landing-page/hero/dashboard.png"
                alt="dashboard image"
            />
        </section>
    );
};

export default PrimaryHero;
