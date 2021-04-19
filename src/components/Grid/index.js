function Grid(props) {
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 grid-rows-auto gap-4 mt-20 max-w-screen-lg sm:p-4">
      {props.children}
    </section>
  );
}

export default Grid;
