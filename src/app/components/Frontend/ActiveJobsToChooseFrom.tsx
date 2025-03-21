import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import ActiveJobCardComponents from "./ActiveJobCardComponents";
import NoJobs from "./NoJobs";

async function getActiveJobs() {
  return await prisma.jobPost.findMany({
    where: { },
    select: {
      jobTitle: true,
      jobDescription: true,
      id: true,
      salaryFrom: true,
      salaryTo: true,
      employmentType: true,
      location: true,
      createdAt: true,
      Company: {
        select: {
          name: true,
          logo: true,
         
          website: true,
          location: true,
          about: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
}

export default async function ActiveJobsToChooseFrom() {
  const result = await getActiveJobs();
  // console.log(result);

  return (
    <>
      {result.length > 0 ? (
        <div className="flex flex-wrap space-y-4 p-4">
          {result.map((job) => (
            <ActiveJobCardComponents key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <NoJobs />
      )}
    </>
  );
}
