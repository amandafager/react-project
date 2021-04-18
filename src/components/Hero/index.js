import Logo from "../../components/Logo";
import Nav from "../../components/Nav";

function Hero() {
  return (
    <header className="pt-16 pb-16 ">
      <div className="flex flex-col items-center">
        <h1 className="uppercase font-thin text-3xl pb-6">Drinks</h1>
        <Logo />
      </div>
      <Nav />
    </header>
  );
}

export default Hero;
