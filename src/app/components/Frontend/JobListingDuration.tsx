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
      <div className="flex flex-col gap-4 w-full bg-rose-400/10 border border-rose-400 p-4 rounded-lg">
        {jobListingDurationPricing.map((duration) => (
          <div key={duration.days}>
            <div className="flex items-center space-x-4">
              {/* Radio Button */}
              <RadioGroupItem
                value={duration.days.toString()}
                id={`option-${duration.days}`}
                aria-label={`${duration.days} Days`}
              />

              {/* Label with Card */}
              <Label className="w-full">
                <Card className="w-full p-4">
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
        ))}
      </div>
    </RadioGroup>
  );
};

export default JobListingDuration;
