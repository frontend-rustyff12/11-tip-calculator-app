import Form from "./Form";
function App() {
  return (
    <main className="min-h-screen grid grid-cols-1 grid-rows-[8rem_auto] bg-cust-Grey-200 font-mono">
      <header className="flex justify-center items-center">
        <img className="h-12" src="/logo.svg" alt="Splitter logo" />
      </header>
      <section className="">
        <Form />
      </section>
    </main>
  );
}

export default App;
