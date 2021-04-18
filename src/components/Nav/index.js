import { Link } from "@reach/router";

function Nav() {
  return (
    <nav className="flex justify-center pt-16 space-x-3">
      <Link className="text-gray-600 hover:underline" to="/Search">
        Search drinks
      </Link>
      <div>/</div>
      <Link className="text-gray-600 hover:underline" to="/Random">
        Random drink
      </Link>
    </nav>
  );
}

export default Nav;
