const UnderstandSkribe = () => {
    return (
        <section className="flex flex-col items-center justify-between gap-12 px-8 py-20 lg:flex-row lg:px-18">
            <article className="flex flex-col gap-7">
                <div className="flex flex-col gap-4 lg:w-[406px] lg:gap-2">
                    <p className="w-fit rounded-3xl border border-[#FF7A00] px-3 py-[10px] text-xs font-medium">
                        Understand Skribe as
                    </p>

                    <h3 className="text-3xl font-bold text-balance text-[#4A4A4A]">
                        Make PR an essential part of your marketing mix
                    </h3>

                    <p className="text-balance text-[#333333] sm:text-xl sm:leading-none">
                        Helping startups and entreprises get media coverage on
                        their own. Helping agencies serve their clients better.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <img
                            className="h-8 w-8"
                            src="/landing-page/understand-skribe/checkmark.png"
                            alt="Checkmark icon"
                        />

                        <p>
                            Helping startups and entreprises get media coverage
                            on
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <img
                            className="h-8 w-8"
                            src="/landing-page/understand-skribe/checkmark.png"
                            alt="Checkmark icon"
                        />

                        <p>
                            Helping startups and entreprises get media coverage
                            on
                        </p>
                    </div>
                </div>

                <button
                    className="w-fit rounded-md bg-[#002B5B] px-7 py-3 text-xl font-extrabold text-[#E0E0E0]"
                    type="button"
                >
                    Try it out
                </button>
            </article>

            <article className="flex flex-wrap gap-4 lg:w-[759px]">
                <div className="grow-1 rounded-[40px] border border-black/30 bg-[#F1F1E6] p-6 sm:h-[132px] lg:w-[338px] xl:grow-0">
                    <p className="text-2xl font-semibold text-[#002B5B]">
                        PR Agencies
                    </p>
                    <p className="text-[#002B5B] sm:w-[188px]">
                        Build multiple List for you
                    </p>
                </div>

                <div className="grow-1 rounded-[40px] border border-black/30 bg-[#F1F1E6] p-6 xl:rounded-none xl:rounded-l-[40px]">
                    <p className="text-2xl font-semibold text-[#002B5B]">
                        In house PR Teams
                    </p>
                    <p className="text-[#002B5B] sm:w-[281px]">
                        Build & nurture relationships with journalists
                    </p>
                </div>

                <div className="grow-1 rounded-[40px] border border-black/30 bg-[#F1F1E6] p-6 sm:h-[132px] lg:w-[434px] xl:grow-0">
                    <p className="text-2xl font-semibold text-[#002B5B]">
                        Marketing Heads
                    </p>
                    <p className="text-[#002B5B] sm:w-[236px]">
                        Invest in earned media to supercharge reach and ROIs
                    </p>
                </div>

                <div className="grow-1 rounded-[40px] border border-black/30 bg-[#F1F1E6] p-6 xl:rounded-none xl:rounded-l-[40px]">
                    <p className="text-2xl font-semibold text-[#002B5B]">
                        Founders
                    </p>
                    <p className="text-[#002B5B] sm:w-[243px]">
                        Monitor your brand and your competitor coverage
                    </p>
                </div>
            </article>
        </section>
    );
};

export default UnderstandSkribe;
