import { benefits } from "../../utils/ListOfBenefits";
import { Badge } from "../../../components/ui/badge";
const BenefitSelector = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {benefits.map((benefit) => {
        return (
          <Badge
           variant="outline"
            key={benefit.id}
            className="cursor-pointer hover:scale-105 transition-all duration-200 ease-out"
            >
            <span>{benefit.icon}</span>
            <span>{benefit.label}</span>
          </Badge>
        );
      })}
    </div>
  );
};

export default BenefitSelector;
