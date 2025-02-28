import { benefits } from "../../utils/ListOfBenefits";
import { Badge } from "../../../components/ui/badge";
import { ControllerRenderProps } from "react-hook-form";

interface BenefitSelectorProps {
  field: ControllerRenderProps;
}

const BenefitSelector = ({ field }: BenefitSelectorProps) => {
  function toggleBenefits(benefitId: string) {
    const currentBenefits = field.value || [];
    const newBenefits = currentBenefits.includes(benefitId)
      ? currentBenefits.filter((id) => id !== benefitId)
      : [...currentBenefits, benefitId];

    field.onChange(newBenefits); // Update field value
  }

  return (
    <>
      <div className="flex flex-wrap gap-3 md:gap-4">
        {benefits.map((benefit) => {
          const isSelected = (field.value || []).includes(benefit.id);
          return (
            <Badge
              variant="secondary"
              onClick={() => toggleBenefits(benefit.id)}
              key={benefit.id}
              className={`
              cursor-pointer
              px-4 py-2 
              rounded-lg 
              border-2 
              ${
                isSelected
                  ? "border-purple-500 bg-purple-100"
                  : "border-purple-100 bg-white"
              }
              hover:bg-purple-50 
              transition-all 
              duration-200 
              ease-out
              hover:shadow-md 
              hover:-translate-y-0.5
              group 
              focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 
            `}
            >
              <div className="flex gap-3 items-center">
                <span
                  className="
                  text-purple-500 
                  text-xl 
                  transition-colors
                  duration-200
                  group-hover:text-purple-600 
                "
                >
                  {benefit.icon}
                </span>
                <span
                  className="
                  text-sm 
                  font-medium 
                  text-purple-900 
                  group-hover:text-purple-950 
                "
                >
                  {benefit.label}
                </span>
              </div>
            </Badge>
          );
        })}
      </div>

      <div className="pt-5">
        <h2 className="text-lg text-center   font-semibold text-primary bg-rose-400 py-2 px-4 rounded-lg">
          Total Selected Benefits: {(field.value || []).length}
        </h2>
      </div>
    </>
  );
};

export default BenefitSelector;
