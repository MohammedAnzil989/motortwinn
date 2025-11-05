// // "use client";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";

// // export function NavBar() {
// //   const pathname = usePathname();
// //   const navLinks = [
// //     { href: "/", label: "Home" },
// //     { href: "/motorviewer", label: "Motor Viewer" },
// //     { href: "/sensordashboard", label: "Sensor Dashboard" },
// //     { href: "/controlpanel", label: "Control Panel" },
// //   ];

// //   return (
// //     <nav className="bg-blue-700 text-white px-6 py-3 flex gap-6">
// //       {navLinks.map(({ href, label }) => (
// //         <Link
// //           key={href}
// //           href={href}
// //           className={`hover:text-yellow-300 ${
// //             pathname === href ? "font-semibold underline" : ""
// //           }`}
// //         >
// //           {label}
// //         </Link>
// //       ))}
// //     </nav>
// //   );
// // }






// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export function NavBar() {
//   const pathname = usePathname();
//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/motorviewer", label: "Motor Viewer" },
//     { href: "/sensordashboard", label: "Sensor Dashboard" },
//     { href: "/controlpanel", label: "Control Panel" },
//   ];

//   return (
//     <nav className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl">
//       {/* Decorative top border with gradient */}
//       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>
      
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo/Brand Section */}
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg">
//               <span className="text-xl font-bold">DT</span>
//             </div>
//             <span className="text-xl font-semibold tracking-tight hidden sm:block">
//               Digital<span className="text-cyan-400">Twin</span>
//             </span>
//           </div>

//           {/* Navigation Links */}
//           <div className="flex items-center gap-2">
//             {navLinks.map(({ href, label }) => {
//               const isActive = pathname === href;
//               return (
//                 <Link
//                   key={href}
//                   href={href}
//                   className={`
//                     relative px-5 py-2.5 rounded-lg font-medium text-sm
//                     transition-all duration-300 ease-in-out
//                     ${
//                       isActive
//                         ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
//                         : "text-slate-300 hover:text-white hover:bg-slate-700/50"
//                     }
//                   `}
//                 >
//                   <span className="relative z-10">{label}</span>
//                   {isActive && (
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-50"></div>
//                   )}
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Subtle bottom shadow */}
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
//     </nav>
//   );
// }





"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/motorviewer", label: "Motor Viewer" },
    { href: "/sensordashboard", label: "Sensor Dashboard" },
    { href: "/controlpanel", label: "Control Panel" },
  ];

  return (
    <nav className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl">
      {/* Decorative top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand Section */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-lg sm:text-xl font-bold">DT</span>
            </div>
            <span className="text-lg sm:text-xl font-semibold tracking-tight">
              Digital<span className="text-cyan-400">Twin</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    relative px-4 xl:px-5 py-2.5 rounded-lg font-medium text-sm
                    transition-all duration-300 ease-in-out
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                    }
                  `}
                >
                  <span className="relative z-10">{label}</span>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-50"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-2 space-y-2">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg font-medium text-sm
                    transition-all duration-300 ease-in-out
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/50"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                    }
                  `}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Subtle bottom shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
    </nav>
  );
}