function Grid(props) {
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20 max-w-screen-lg">
      {props.children}
    </section>
  );
}

export default Grid;
