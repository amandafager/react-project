import { Link } from "@reach/router";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "underline text-gray-900 font-bold" } : {};
};

function Nav(props) {
  return (
    <nav className="flex justify-center pt-16 space-x-3">
      <Link
        className="text-gray-600 underline"
        to="/Search"
        getProps={isActive}
        {...props}
      >
        Search drinks
      </Link>
      <div>/</div>
      <Link
        className="text-gray-600 underline"
        getProps={isActive}
        {...props}
        to="/Random"
      >
        Drink suggestion
      </Link>
    </nav>
  );
}

export default Nav;
