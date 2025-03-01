interface JobListingDurationPricing {
    days: number;
    price: number;
    description: string;
  }
export const jobListingDurationPricing: JobListingDurationPricing[] = [
    {
      days: 30,
      price: 60000,
      description: "Standard listing",
    },
    {
      days: 60,
      price: 179,
      description: "Extended visibility",
    },
    {
      days: 90,
      price: 249,
      description: "Maximum exposure",
    },
  ];