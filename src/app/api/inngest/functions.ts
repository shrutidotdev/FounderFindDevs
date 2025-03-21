import { prisma } from "@/lib/prisma";
import { inngest } from "../../../lib/inngest/client";

export const helloWorld = inngest.createFunction(
  { id: "hello there world it's me shruti!" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

export const handleJobListingDurationExpiration = inngest.createFunction(

  { id: "handle-job-listing-duration-expiration"},
  { event: "job/listingExpired"},

  async ({ event, step}) => {
    const { jobId , expirationDays } = event.data;

    await step.sleep('wait-for-expiration-duration', `${expirationDays}d`);

    await step.run("delete-job-listing", async() => {
      await prisma.jobPost.update({
        where: {
          id: jobId,
        },
        data: {
          status: "EXPIRED",
        },
      });
    });

    return { jobId, message: "Job marked as expired"}
  }
);