export default function Form() {
  const btnClass =
    "bg-cust-Green-900 py-6 px-8 rounded-xl text-cust-White font-bold text-5xl hover:bg-cust-Green-400 cursor-pointer";

  const labelClass = "text-3xl text-cust-Grey-500 font-bold";

  return (
    <form className="bg-cust-White h-full rounded-t-4xl p-16 grid grid-cols-1 grid-rows-auto gap-8">
      <div className="flex flex-col">
        <label className={labelClass} htmlFor="bill">
          Bill
        </label>
        <input
          type="text"
          className="bg-[url('/icon-dollar.svg')] bg-no-repeat bg-[0.5rem_center] bg-[length:1.5rem] bg-gray-50 text-right pl-8 p-6 mt-8 text-4xl"
          name="bill"
          placeholder="0"
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="tip-select">
          Select Tip %
        </label>
        <div className="grid grid-cols-2 grid-rows-3 gap-6 mt-8">
          <button className={btnClass}>5%</button>
          <button className={btnClass}>10%</button>
          <button className={btnClass}>15%</button>
          <button className={btnClass}>25%</button>
          <button className={btnClass}>50%</button>
          <label htmlFor="custom" className="hidden"></label>
          <input
            className="placeholder:text-center text-right p-2 bg-gray-50 rounded text-5xl font-bold"
            type="text"
            placeholder="Custom"
            name="custom"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className={labelClass} htmlFor="head-count">
          Number of People
        </label>
        <input
          type="text"
          className="bg-[url('/icon-person.svg')] bg-no-repeat bg-[0.5rem_center] bg-[length:1.5rem] bg-gray-50 text-right pl-8 p-6 mt-8 text-4xl"
          name="Head-count"
          placeholder="0"
        />
      </div>
      <div className="p-8 grid bg-cust-Green-900  rounded-xl gap-12">
        <div className="flex flex-col gap-8 mt-8">
          <div className="flex justify-between">
            <div>
              <h2 className="text-cust-White text-lg">Tip Amount</h2>
              <p className="text-base text-cust-Grey-400 font-semibold">
                / person
              </p>
            </div>
            <p className="text-cust-Green-400 font-bold text-5xl">$4.27</p>
          </div>

          <div className="flex justify-between">
            <div>
              <h2 className="text-cust-White text-lg">Total</h2>
              <p className="text-base text-cust-Grey-400 font-semibold">
                / person
              </p>
            </div>
            <p className="text-cust-Green-400 font-bold text-5xl">$32.79</p>
          </div>
        </div>
        <button className="bg-cust-Green-400 p-6 rounded-xl text-cust-Green-900 font-bold text-4xl hover:bg-cust-Green-400 cursor-pointer uppercase">
          Reset
        </button>
      </div>
    </form>
  );
}
