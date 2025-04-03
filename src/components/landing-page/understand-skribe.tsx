const UnderstandSkribe = () => {
    return (
        <section className="flex items-center px-18 gap-12 py-20">
            <article className="flex flex-col gap-7">
                <div className="flex flex-col w-[406px] gap-2">
                    <p className="text-xs w-fit font-medium border border-[#FF7A00] py-[10px] px-3 rounded-3xl">
                        Understand Skribe as
                    </p>

                    <h3 className="font-bold text-3xl text-[#4A4A4A] text-balance">
                        Make PR an essential part of your marketing mix
                    </h3>

                    <p className="text-xl text-[#333333] leading-none text-balance">
                        Helping startups and entreprises get media coverage on
                        their own.Helping agencies serve their clients better.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <img
                            className="w-8 h-8"
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
                            className="w-8 h-8"
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
                    className="bg-[#002B5B] text-[#E0E0E0] font-extrabold text-xl w-fit py-3 px-7 rounded-md"
                    type="button"
                >
                    Try it out
                </button>
            </article>

            <article className="flex flex-wrap gap-4 w-[759px]">
                <div className="bg-[#F1F1E6] border border-black/30 rounded-[40px] p-6 w-[338px] h-[132px]">
                    <p className="text-[#002B5B] font-semibold text-2xl">
                        PR Agencies
                    </p>
                    <p className="text-[#002B5B] w-[188px]">
                        Build multiple List for you
                    </p>
                </div>

                <div className="bg-[#F1F1E6] flex-1 border border-black/30 p-6 rounded-l-[40px]">
                    <p className="text-[#002B5B] font-semibold text-2xl">
                        In house PR Teams
                    </p>
                    <p className="text-[#002B5B] w-[281px]">
                        Build & nurture relationships with journalists
                    </p>
                </div>

                <div className="bg-[#F1F1E6] border border-black/30 rounded-[40px] w-[434px] h-[132px] p-6">
                    <p className="text-[#002B5B] font-semibold text-2xl">
                        Marketing Heads
                    </p>
                    <p className="text-[#002B5B] w-[236px]">
                        Invest in earned media to supercharge reach and ROIs
                    </p>
                </div>

                <div className="bg-[#F1F1E6] flex-1 border border-black/30 p-6 rounded-l-[40px]">
                    <p className="text-[#002B5B] font-semibold text-2xl">
                        Founders
                    </p>
                    <p className="text-[#002B5B] w-[243px]">
                        Monitor your brand and your competitor coverage
                    </p>
                </div>
            </article>
        </section>
    );
};

export default UnderstandSkribe;
