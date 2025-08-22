import Form from "./Form";
function App() {
  return (
    <main className="min-h-screen grid grid-cols-1 grid-rows-[18rem_auto] bg-cust-Grey-200 font-mono lg:grid-rows-[10rem_auto]">
      <header className="flex justify-center items-center">
        <img className="h-36 lg:h-16" src="/logo.svg" alt="Splitter logo" />
      </header>
      <section className="lg:flex lg:justify-center lg:items-center lg:mb-[10rem]">
        <Form />
      </section>
    </main>
  );
}

export default App;
