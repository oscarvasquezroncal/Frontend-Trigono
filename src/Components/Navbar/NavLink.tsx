interface NavLinkProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
  }
  
  export default function NavLink({ label, isActive, onClick }: NavLinkProps) {
    return (
      <button
        className={`relative text-sm font-medium px-4 py-2 transition-all duration-200 
          ${isActive ? "text-white border-b-2 border-blue-500" : "text-gray-300 hover:text-gray-100"}
        `}
        onClick={onClick}
      >
        {label}
        {isActive && (
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transition-all duration-300" />
        )}
      </button>
    );
  }
  