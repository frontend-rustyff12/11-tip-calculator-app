import { useState } from "react";
import { btnClass, labelClass, inputClass } from "./customClasses";
export default function Form() {
  const [formData, setFormData] = useState({
    total: "",
    headCount: "",
    tipPercent: "",
  });
  const [validState, setValidState] = useState(true);

  function handleInputChange(e) {
    const { name, value } = e.target;

    if (name === "tipPercent" && value) {
      const { headCount } = formData;
      if (!headCount || Number(headCount) <= 0) {
        setValidState(false);
        return;
      }
      setValidState(true);
      const numericValue = Number(value);
      if (!isNaN(numericValue) && numericValue >= 0) {
        setFormData((prev) => ({ ...prev, [name]: numericValue / 100 }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: "" })); // Clear invalid input
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleTipClick(e) {
    e.preventDefault();
    const { headCount } = formData;

    if (!headCount || Number(headCount) <= 0) {
      setValidState(false);
      return;
    }
    setValidState(true);

    const tipPercent = e.target.value;
    setFormData((prev) => ({ ...prev, tipPercent }));
  }

  function calculateAmounts(bill, people, percent) {
    const billNum = Number(bill) || 0;
    const peopleNum = Number(people) || 1;
    const percentNum = Number(percent) || 0;

    const preTip = billNum / peopleNum;
    const tipPerPerson = (preTip * percentNum).toFixed(2);
    const totalPerPerson = (preTip + Number(tipPerPerson)).toFixed(2);

    return { tipPerPerson, totalPerPerson };
  }

  function handleReset(e) {
    e.preventDefault();
    setFormData({ total: "", headCount: "", tipPercent: "" });
    setValidState(true);
  }

  const { tipPerPerson, totalPerPerson } = calculateAmounts(
    formData.total,
    formData.headCount,
    formData.tipPercent
  );

  return (
    <form className="bg-cust-White h-full rounded-t-4xl p-16 grid grid-cols-1 grid-rows-auto gap-8 lg:grid-cols-2 lg:w-9/12 lg:p-4 lg:rounded-t-0 lg:rounded-2xl">
      <div className=" flex flex-col gap-8 lg:flex lg:flex-col lg:justify-between">
        <div className="flex flex-col ">
          <label className={labelClass} htmlFor="bill">
            Bill
          </label>
          <input
            type="text"
            inputMode="numeric"
            className={`bg-[url('/icon-dollar.svg')] ${inputClass}`}
            name="total"
            value={formData.total}
            onChange={handleInputChange}
            placeholder="0"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="tip-select">
            Select Tip %
          </label>
          <div className="grid grid-cols-2 grid-rows-3 gap-6 mt-8 lg:grid-cols-3 lg:grid-rows-2 lg:gap-2  lg:mt-2">
            <button
              onClick={handleTipClick}
              className={`${btnClass} ${
                formData.tipPercent === "0.05"
                  ? "bg-cust-Green-400"
                  : "bg-cust-Green-900"
              }`}
              value="0.05"
              aria-label="Select 5% tip"
              aria-pressed={formData.tipPercent === "0.05"}
            >
              5%
            </button>
            <button
              onClick={handleTipClick}
              className={`${btnClass} ${
                formData.tipPercent === "0.10"
                  ? "bg-cust-Green-400"
                  : "bg-cust-Green-900"
              }`}
              value="0.10"
              aria-label="Select 10% tip"
              aria-pressed={formData.tipPercent === "0.10"}
            >
              10%
            </button>
            <button
              onClick={handleTipClick}
              className={`${btnClass} ${
                formData.tipPercent === "0.15"
                  ? "bg-cust-Green-400"
                  : "bg-cust-Green-900"
              }`}
              value="0.15"
              aria-label="Select 15% tip"
              aria-pressed={formData.tipPercent === "0.15"}
            >
              15%
            </button>
            <button
              onClick={handleTipClick}
              className={`${btnClass} ${
                formData.tipPercent === "0.25"
                  ? "bg-cust-Green-400"
                  : "bg-cust-Green-900"
              }`}
              value="0.25"
              aria-label="Select 25% tip"
              aria-pressed={formData.tipPercent === "0.25"}
            >
              25%
            </button>
            <button
              onClick={handleTipClick}
              className={`${btnClass} ${
                formData.tipPercent === "0.50"
                  ? "bg-cust-Green-400"
                  : "bg-cust-Green-900"
              }`}
              value="0.50"
              aria-label="Select 50% tip"
              aria-pressed={formData.tipPercent === "0.50"}
            >
              50%
            </button>
            <label htmlFor="tipPercent" className="sr-only">
              Custom Tip Percentage
            </label>
            <input
              className="placeholder:text-center text-right p-2 bg-gray-50 rounded text-5xl font-bold lg:text-xl"
              type="text"
              inputMode="numeric"
              placeholder="Custom"
              name="tipPercent"
              id="tipPercent"
              value={formData.tipPercent ? formData.tipPercent * 100 : ""}
              onChange={handleInputChange}
              aria-describedby="tipPercent-hint"
            />
            <p id="tipPercent-hint" className="sr-only">
              Enter percentage like 15 for 15%
            </p>
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
            inputMode="numeric"
            className={`bg-[url('/icon-person.svg')] ${inputClass} ${
              validState ? "" : "border border-red-500 rounded p-2"
            }`}
            name="headCount"
            id="head-count"
            value={formData.headCount}
            onChange={handleInputChange}
            placeholder="0"
            aria-describedby={validState ? undefined : "head-count-error"}
            aria-invalid={!validState}
          />
        </div>
      </div>
      <div className="p-8 grid bg-cust-Green-900  rounded-xl gap-12 lg:p-4 lg:gap-4 lg:grid-cols-1 lg:grid-rows-2">
        <div className="flex flex-col gap-8 mt-8">
          <div className="flex justify-between">
            <div>
              <h2 className="text-cust-White text-lg lg:text-base">
                Tip Amount
              </h2>
              <p className="text-base text-cust-Grey-400 font-semibold lg:text-sm">
                / person
              </p>
            </div>
            <p className="text-cust-Green-400 font-bold text-5xl lg:text-2xl">
              {tipPerPerson}
            </p>
          </div>

          <div className="flex justify-between">
            <div>
              <h2 className="text-cust-White text-lg lg:text-base">Total</h2>
              <p className="text-base text-cust-Grey-400 font-semibold lg:text-sm">
                / person
              </p>
            </div>
            <p className="text-cust-Green-400 font-bold text-5xl lg:text-2xl">
              {totalPerPerson}
            </p>
          </div>
        </div>
        <div className="flex lg:items-end">
          <button
            onClick={handleReset}
            className="w-full bg-cust-Green-400 p-6 rounded-xl text-cust-Green-900 font-bold text-4xl hover:bg-cust-Grey-400 cursor-pointer uppercase lg:text-2xl lg:p-2"
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}
