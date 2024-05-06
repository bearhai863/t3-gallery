import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/fd68962a-8da7-4299-bfba-1a1382b9d089-1rhq3y.jpg",
  "https://utfs.io/f/f3bff00f-6430-464f-afca-c278654a244b-1pyxt1.jpg",
  "https://utfs.io/f/bd5bde87-4d1f-4710-81e2-30afc3c62b0b-1jb5z7.jpg",
  "https://utfs.io/f/bbd3229f-f38f-4d10-9457-01ab761524e1-mmbo4b.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
