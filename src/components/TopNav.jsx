import { FaBars } from "react-icons/fa";

export default function TopNav({ onMenuClick }) {
  return (
    <header
      className="sticky top-0 z-30 backdrop-blur-md
      bg-white/90 border-b shadow-sm"
    >
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg
            text-gray-700 hover:bg-gray-100 transition"
            aria-label="Open menu"
          >
            <FaBars className="text-xl" />
          </button>

          <img
            src="/logo.png"
            alt="Career Campus"
            className="h-9 w-9 object-contain rounded-lg"
          />

          <span className="font-bold text-lg tracking-wide text-red-700">
            Career Campus
          </span>
        </div>

        {/* RIGHT (Future-ready) */}
        <div className="flex items-center gap-4">
          {/* Placeholder for notifications / profile */}
          <div
            className="w-9 h-9 rounded-full bg-gradient-to-br
            from-red-500 to-red-700 text-white
            flex items-center justify-center font-semibold"
          >
            CC
          </div>
        </div>

      </div>
    </header>
  );
}
