import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              className="h-12 w-auto"
              src="https://imagekit.io/public/share/aiAuto/a7665f3c489e24925571c83dc57245cb19a714c9dfd762dff74ec6659e91ad9c895ae70e6794aa55f1cff2a431aff74f97bd5c8714279306f60538e4f6350ef24e57b0480b735760879f3d57d8327a16"
              alt="AI Automations Unstoppable"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}