import { useState } from "react";
import { Menu, X } from "lucide-react";

const MobileNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <div className="lg:hidden">
            <button
                type="button"
                className="cursor-pointer"
                onClick={() => setIsMenuOpen((p) => !p)}
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {isMenuOpen && (
                <ul className="absolute top-20 left-0 z-50 flex h-dvh w-full flex-col gap-5 bg-[#EDF5FF] p-8 text-xl font-medium text-[#002B5B]">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Product</li>
                    <li className="cursor-pointer">Pricing</li>
                    <li className="cursor-pointer">Resources</li>
                    <li className="cursor-pointer">Company</li>

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
                </ul>
            )}
        </div>
    );
};

export default MobileNavbar;
