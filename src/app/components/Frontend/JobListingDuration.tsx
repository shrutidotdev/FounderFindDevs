import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import { ControllerRenderProps } from "react-hook-form";
import { jobListingDurationPricing } from "../../utils/jobListingDurationPricing";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface JobListingDurationProps {
  field: ControllerRenderProps;
}

const JobListingDuration = ({ field }: JobListingDurationProps) => {
  return (
    <RadioGroup
      value={field.value?.toString()}
      onValueChange={(value) => field.onChange(parseInt(value))}
    >
      <div className="flex flex-col gap-4 w-full p-4 rounded-lg">
        {jobListingDurationPricing.map((duration) => {
          const isSelected = field.value === duration.days; // Check if selected
          
          return (
            <div key={duration.days}>
              <div className="flex items-center space-x-4">
                {/* Radio Button */}
                <RadioGroupItem
                  value={duration.days.toString()}
                  id={`option-${duration.days}`}
                  aria-label={`${duration.days} Days`}
                />

                {/* Label with Card */}
                <Label htmlFor={duration.days.toString()} className="w-full">
                  <Card
                    className={`w-full p-4 transition-colors ease-in-out scroll-smooth duration-300 ${
                      isSelected ? "bg-rose-300 border-rose-400" : "bg-black border-gray-300"
                    } border`}
                  >
                    {/* Flex container to separate Days and Price */}
                    <div className="flex justify-between items-center w-full">
                      {/* Days & Description */}
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-2xl">{duration.days} Days</p>
                        <p className="text-gray-600">{duration.description}</p>
                      </div>

                      {/* Price Section */}
                      <div className="text-right">
                        <p className="font-bold text-2xl text-rose-400">₹{duration.price} / month</p>
                      </div>
                    </div>
                  </Card>
                </Label>
              </div>
            </div>
          );
        })}
      </div>
    </RadioGroup>
  );
};

export default JobListingDuration;
