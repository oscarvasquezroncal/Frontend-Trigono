import Logo from "./Logo";
import NavLink from "./NavLink";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: "dashboard" | "orders") => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const links = [
    { label: "Dashboard", value: "dashboard" },
    { label: "Ordenes", value: "orders" },
  ];

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 
                    bg-gray-800 bg-opacity-90 backdrop-blur-md shadow-xl 
                    rounded-full px-10 py-2 flex items-center justify-between 
                    border border-gray-600 z-50 w-max text-white transition-all duration-300">
      <Logo />

      <div className="flex space-x-6 ml-6">
        {links.map((link) => (
          <NavLink
            key={link.value}
            label={link.label}
            isActive={activeTab === link.value}
            onClick={() => setActiveTab(link.value as "dashboard" | "orders")}
          />
        ))}
      </div>
    </div>
  );
}
