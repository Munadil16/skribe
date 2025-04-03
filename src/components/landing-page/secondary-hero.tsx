const SecondaryHero = () => {
    return (
        <section className="flex flex-col gap-10 items-center pt-20">
            <article className="flex flex-col items-center justify-center gap-4">
                <h2 className="w-[1016px] text-[#4A4A4A] font-bold text-[44px] text-center">
                    Skribe is the AI partner for PR
                </h2>

                <p className="w-[1016px] text-[#333333] text-xl text-center leading-tight">
                    Helping startups and entreprises get media coverage on their
                    own. Helping agencies serve their clients better. Helping
                    startups and entreprises get media coverage on
                </p>
            </article>

            <article className="flex items-center gap-4 w-[1280px] shadow-[326px_252px_165px_0px_#00000003]">
                <div className="relative flex flex-col gap-4">
                    <img
                        className="absolute -top-8 -left-8 w-[100px] h-[100px]"
                        src="landing-page/hero/rupee.png"
                        alt="Rupee icon"
                    />

                    <img
                        className="w-[604px] h-[237px] rounded-2xl shadow-[20px_16px_57px_0px_#0000001A]"
                        src="/landing-page/hero/dropdown-boxes.png"
                        alt="Dropdown boxes image"
                    />

                    <img
                        className="w-[604px] h-[165px] rounded-2xl shadow-[81px_63px_103px_0px_#00000017]"
                        src="/landing-page/hero/check-boxes.png"
                        alt="Check boxes image"
                    />
                </div>

                <div className="relative">
                    <img
                        className="absolute -bottom-12 -right-12 w-[100px] h-[100px]"
                        src="landing-page/hero/message.png"
                        alt="Message icon"
                    />

                    <img
                        className="w-[656px] h-[421px] rounded-xl shadow-[183px_142px_139px_0px_#0000000D]"
                        src="/landing-page/hero/reach-graph.png"
                        alt="React graph image"
                    />
                </div>
            </article>
        </section>
    );
};

export default SecondaryHero;
