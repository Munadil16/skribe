const SecondaryHero = () => {
    return (
        <section className="flex flex-col items-center gap-10 px-10 pt-20 xl:px-0">
            <article className="flex flex-col items-center justify-center gap-4">
                <h2 className="text-center text-3xl font-bold text-[#4A4A4A] sm:text-4xl lg:text-[44px] xl:w-[1016px]">
                    Skribe is the AI partner for PR
                </h2>

                <p className="text-center leading-tight text-[#333333] md:w-[620px] lg:text-xl xl:w-[1016px]">
                    Helping startups and entreprises get media coverage on their
                    own. Helping agencies serve their clients better. Helping
                    startups and entreprises get media coverage on
                </p>
            </article>

            <article className="flex flex-col items-center gap-4 shadow-[326px_252px_165px_0px_#00000003] sm:flex-row xl:w-[1180px]">
                <div className="relative flex flex-col gap-4">
                    <img
                        className="absolute -top-6 -left-6 w-16 sm:-top-8 sm:-left-8 lg:h-[100px] lg:w-[100px]"
                        src="landing-page/hero/rupee.png"
                        alt="Rupee icon"
                    />

                    <img
                        className="rounded-2xl border border-black/30 shadow-[20px_16px_57px_0px_#0000001A] sm:w-[304px] md:w-[454px] xl:h-[237px] xl:w-[604px]"
                        src="/landing-page/hero/dropdown-boxes.png"
                        alt="Dropdown boxes image"
                    />

                    <img
                        className="rounded-2xl border border-black/30 shadow-[81px_63px_103px_0px_#00000017] sm:w-[304px] md:w-[454px] xl:h-[165px] xl:w-[604px]"
                        src="/landing-page/hero/check-boxes.png"
                        alt="Check boxes image"
                    />
                </div>

                <div className="relative">
                    <img
                        className="absolute -right-8 -bottom-8 w-16 lg:h-[100px] lg:w-[100px] xl:-right-12 xl:-bottom-12"
                        src="landing-page/hero/message.png"
                        alt="Message icon"
                    />

                    <img
                        className="rounded-xl border border-black/30 shadow-[183px_142px_139px_0px_#0000000D] sm:w-[346px] md:w-[500px] xl:h-[421px] xl:w-[656px]"
                        src="/landing-page/hero/reach-graph.png"
                        alt="React graph image"
                    />
                </div>
            </article>
        </section>
    );
};

export default SecondaryHero;
