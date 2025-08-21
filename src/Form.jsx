export default function Form() {
  const btnClass =
    "bg-cust-Green-900 p-1 rounded text-cust-White font-bold text-2xl hover:bg-cust-Green-400 cursor-pointer";
  return (
    <form className="bg-cust-White h-full rounded-t-3xl p-6 grid grid-cols-1 grid-rows-auto gap-8">
      <div className="flex flex-col">
        <label htmlFor="bill">Bill</label>
        <input
          type="text"
          className="bg-[url('/icon-dollar.svg')] bg-no-repeat bg-[0.5rem_center] bg-gray-50 text-right pl-8 p-2 mt-2"
          name="bill"
          placeholder="0"
        />
      </div>
      <div>
        <label htmlFor="tip-select">Select Tip %</label>
        <div className="grid grid-cols-2 grid-rows-3 gap-4 mt-2">
          <button className={btnClass}>5%</button>
          <button className={btnClass}>10%</button>
          <button className={btnClass}>15%</button>
          <button className={btnClass}>25%</button>
          <button className={btnClass}>50%</button>
          <label htmlFor="custom" className="hidden"></label>
          <input
            className="placeholder:text-center text-right p-2 bg-gray-50 rounded text-xl"
            type="text"
            placeholder="Custom"
            name="custom"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="head-count">Number of People</label>
        <input
          type="text"
          className="bg-[url('/icon-person.svg')] bg-no-repeat bg-[0.5rem_center] bg-gray-50 text-right pl-8 p-2"
          name="Head-count"
          placeholder="0"
        />
      </div>
      <div className="p-4 grid bg-cust-Green-900  rounded-xl gap-4">
        <div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-cust-White text-sm">Tip Amount</h2>
              <p className="text-xs text-cust-Grey-400">/ person</p>
            </div>
            <p className="text-cust-Green-400 font-bold text-2xl">$4.27</p>
          </div>

          <div className="flex justify-between">
            <div>
              <h2 className="text-cust-White text-sm">Total</h2>
              <p className="text-xs text-cust-Grey-400">/ person</p>
            </div>
            <p className="text-cust-Green-400 font-bold text-2xl">$32.79</p>
          </div>
        </div>
        <button className="bg-cust-Green-400 p-1 rounded text-cust-Green-900 font-bold text-xl hover:bg-cust-Green-400 cursor-pointer uppercase">
          Reset
        </button>
      </div>
    </form>
  );
}
