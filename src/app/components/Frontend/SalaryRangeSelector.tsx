import React, { useState } from "react";
import { Slider } from "../../../components/ui/Slider";
import { Control, useController } from "react-hook-form";

interface SalaryRangeSelectorProps {
  control: Control<any>;
  minSalary: number;
  maxSalary: number;
  step: number;
  currency: string;
}

const SalaryRangeSelector = ({
  control,
  minSalary,
  maxSalary,
  step,
  currency,
}: SalaryRangeSelectorProps) => {
  const { field: formField } = useController({
    name: "salaryFrom",
    control,
  });
  const { field: toField } = useController({
    name: "salaryTo",
    control,
  });
  const [range, setRange] = useState<[number, number]>(
    [formField.value || minSalary, toField.value || maxSalary / 2]
  );

  function handleChangeRange(value: number[]) {
    const newRange: [number, number] = [value[0], value[1]];
    setRange(newRange);
    formField.onChange(newRange[0]);
    toField.onChange(newRange[1]);
  }
  function Currency(amount: number) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      notation: "compact",
      unitDisplay: "narrow",
      currencyDisplay: "symbol",
      signDisplay: "auto",
      useGrouping: true,
      compactDisplay: "short",
      currencySign: "accounting",
    }).format(amount);
  }

  return (
    <div>
      <Slider
        onValueChange={handleChangeRange}
        min={minSalary}
        max={maxSalary}
        step={step}
        value={range}
      />

      <div className="flex justify-between mt-2">
        <span>{Currency(range[0])}</span>
        <span>{Currency(range[1])}</span>
      </div>
    </div>
  );
};

export default SalaryRangeSelector;
