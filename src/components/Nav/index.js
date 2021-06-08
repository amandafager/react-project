import { Link } from "@reach/router";

export default function Nav() {
  function isActive({ isCurrent }) {
    return isCurrent ? { className: "underline text-gray-900 font-bold" } : {};
  }

  return (
    <nav className="flex justify-center pt-16 space-x-3">
      <Link className="text-gray-600 underline" to="/" getProps={isActive}>
        Search
      </Link>
      <div>/</div>
      <Link
        className="text-gray-600 underline"
        to="/drink-suggestion"
        getProps={isActive}
      >
        Get a suggestion
      </Link>
    </nav>
  );
}
