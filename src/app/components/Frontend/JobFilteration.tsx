import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { countryList } from "../../utils/contryLists"; // Check spelling: `contryLists` → `countryLists`
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";

const JobType = ["Full-Time🏢", "Part-Time⏳", "Contract📝", "👩🏻‍💻Internship"];

const JobFilteration = () => {
  return (
    <Card>
      <CardHeader>What Interests You?</CardHeader>
      <CardContent>
        {/* Job Type */}
        <div className="space-y-4 py-5">
          <Label>Job Type</Label>
          <div className="flex flex-wrap gap-2">
            {JobType.map((type, index) => (
              <Button key={index} variant="outline">
                {type}
              </Button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Job Location */}
        <div className="space-y-4 py-5">
          <Label>Job Location</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {countryList.map((country) => (
                  <SelectItem key={country.code} value={country.name}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobFilteration;
