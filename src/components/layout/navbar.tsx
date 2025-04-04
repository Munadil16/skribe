import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-[#EDF5FF] px-8 py-5 sm:px-16 lg:px-20">
            <div className="flex items-center gap-16 xl:gap-24">
                <img
                    className="h-12 w-[88.8px]"
                    src="/brand/logo.png"
                    alt="Skribe Logo"
                />

                <ul className="hidden items-center gap-6 font-medium text-[#002B5B] lg:flex">
                    <li className="cursor-pointer underline decoration-[#002B5B] underline-offset-4">
                        Home
                    </li>
                    <li className="cursor-pointer">Product</li>
                    <li className="cursor-pointer">Pricing</li>
                    <li className="cursor-pointer">Resources</li>
                    <li className="cursor-pointer">Company</li>
                </ul>
            </div>

            <div className="hidden items-center gap-6 lg:flex">
                <button
                    type="button"
                    className="cursor-pointer rounded-md border border-[#002B5B] px-4 py-3 font-medium text-[#002B5B]"
                >
                    Request Demo
                </button>

                <button
                    type="button"
                    className="cursor-pointer rounded-md bg-[#002B5B] px-4 py-3 font-medium text-white"
                >
                    Login
                </button>
            </div>

            <MobileNavbar />
        </nav>
    );
};

export default Navbar;
