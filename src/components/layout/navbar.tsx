const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-5 px-24 bg-[#EDF5FF]">
            <div className="flex items-center gap-24">
                <img
                    className="w-[88.8px] h-12"
                    src="/brand/logo.png"
                    alt="Skribe Logo"
                />

                <ul className="flex items-center gap-6 text-[#002B5B] font-medium">
                    <li className="cursor-pointer underline underline-offset-4 decoration-[#002B5B]">
                        Home
                    </li>
                    <li className="cursor-pointer">Product</li>
                    <li className="cursor-pointer">Pricing</li>
                    <li className="cursor-pointer">Resources</li>
                    <li className="cursor-pointer">Company</li>
                </ul>
            </div>

            <div className="flex items-center gap-6">
                <button
                    type="button"
                    className="border border-[#002B5B] text-[#002B5B] font-medium py-3 px-4 rounded-md"
                >
                    Request Demo
                </button>

                <button
                    type="button"
                    className="bg-[#002B5B] text-white py-3 px-4 font-medium rounded-md"
                >
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
