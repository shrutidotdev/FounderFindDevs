import { requireUser } from "@/app/utils/requireUser";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();


export const ourFileRouter = {

  // Images
  imageUploader: f({
    image: {
      maxFileSize: "2MB",
      maxFileCount: 1,
    },
   
  })
  
    .middleware(async () => {
    const session = await requireUser()

      // If you throw, the user will not be able to upload
      if (!session.id) throw new UploadThingError("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: session.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.ufsUrl);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),

    // Pdf resume
    resumePdfUploader: f({
      "application/pdf": {
        maxFileSize: "2MB",
        maxFileCount: 1,
      },
    })
    .middleware(async () => {
      const session = await requireUser()
  
        // If you throw, the user will not be able to upload
        if (!session.id) throw new UploadThingError("Unauthorized");
  
        // Whatever is returned here is accessible in onUploadComplete as `metadata`
        return { userId: session.id };
      })
      .onUploadComplete(async ({ metadata, file }) => {
        // This code RUNS ON YOUR SERVER after upload
        console.log("Upload complete for userId:", metadata.userId);
  
        console.log("file url", file.ufsUrl);
  
        // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
        return { uploadedBy: metadata.userId };
      }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
