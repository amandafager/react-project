import Logo from "../../components/Logo";
import Nav from "../../components/Nav";

export default function Hero() {
  return (
    <header className="pt-16 pb-16 ">
      <div className="flex flex-col items-center">
        <h1 className="uppercase font-thin text-3xl pb-6">Drinks</h1>
        <Logo />
        <p className="pt-10 ">The cocktail recipe app</p>
      </div>
      <Nav />
    </header>
  );
}
