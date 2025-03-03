interface JobListingDurationPricing {
    days: number;
    price: number;
    description: string;
  }
export const jobListingDurationPricing: JobListingDurationPricing[] = [
    {
      days: 30,
      price: 6000,
      description: "Standard listing",
    },
    {
      days: 60,
      price: 7000,
      description: "Extended visibility",
    },
    {
      days: 90,
      price: 8000,
      description: "Maximum exposure",
    },
  ];