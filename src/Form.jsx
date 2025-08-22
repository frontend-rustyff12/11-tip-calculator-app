import { useState } from "react";
import { btnClass, labelClass, inputClass } from "./customClasses";
export default function Form() {
  const [total, setTotal] = useState("");
  const [headCount, setHeadCount] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [tipPerPerson, setTipPerPerson] = useState("$0.00");
  const [totalPerPerson, setTotalPerPerson] = useState("$0.00");
  const [validState, setValidState] = useState(true);

  function handleTotal(e) {
    setTotal(e.target.value);
  }

  function handleHeadCount(e) {
    setHeadCount(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (headCount === "") {
      setValidState(false);
      return;
    }
    setValidState(true);
    const amount = e.target.value;
    setTipPercent(amount);
  }

  return (
    <form className="bg-cust-White h-full rounded-t-4xl p-16 grid grid-cols-1 grid-rows-auto gap-8">
      <div className="flex flex-col">
        <label className={labelClass} htmlFor="bill">
          Bill
        </label>
        <input
          type="text"
          className={`bg-[url('/icon-dollar.svg')] ${inputClass}`}
          name="bill"
          value={total}
          onChange={handleTotal}
          placeholder="0"
        />
      </div>
      <div>
        <label className={labelClass} htmlFor="tip-select">
          Select Tip %
        </label>
        <div className="grid grid-cols-2 grid-rows-3 gap-6 mt-8">
          <button onClick={handleClick} className={btnClass} value="5">
            5%
          </button>
          <button onClick={handleClick} className={btnClass} value="10">
            10%
          </button>
          <button onClick={handleClick} className={btnClass} value="15">
            15%
          </button>
          <button onClick={handleClick} className={btnClass} value="25">
            25%
          </button>
          <button onClick={handleClick} className={btnClass} value="50">
            50%
          </button>
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
        <div className="flex justify-between items-center">
          <label className={labelClass} htmlFor="head-count">
            Number of People
          </label>
          <p
            className={`text-2xl text-red-400 font-bold ${
              validState ? "hidden" : ""
            }`}
          >
            Can't be zero
          </p>
        </div>
        <input
          type="text"
          className={`bg-[url('/icon-person.svg')] ${inputClass} ${
            validState ? "" : "border border-red-500 rounded p-2"
          }`}
          name="head-count"
          value={headCount}
          onChange={handleHeadCount}
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
            <p className="text-cust-Green-400 font-bold text-5xl">
              {tipPerPerson}
            </p>
          </div>

          <div className="flex justify-between">
            <div>
              <h2 className="text-cust-White text-lg">Total</h2>
              <p className="text-base text-cust-Grey-400 font-semibold">
                / person
              </p>
            </div>
            <p className="text-cust-Green-400 font-bold text-5xl">
              {totalPerPerson}
            </p>
          </div>
        </div>
        <button className="bg-cust-Green-400 p-6 rounded-xl text-cust-Green-900 font-bold text-4xl hover:bg-cust-Green-400 cursor-pointer uppercase">
          Reset
        </button>
      </div>
    </form>
  );
}
