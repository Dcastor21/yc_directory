import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = await client.fetch(STARTUPS_QUERY);

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     _id: 1,
  //     title: "Title",
  //     description: "Description",
  //     category: "Small Business",
  //     views: 55,
  //     author: {
  //       authorId: 1,
  //       name: "Author",
  //     },
  //     image:
  //       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthimpress.com%2Fentrepreneurs-are-developing-mobile-app-startup%2F&psig=AOvVaw3gTUtcHosa9bFhYrY25vai&ust=1742311228213000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOD51aK1kYwDFQAAAAAdAAAAABAE",
  //   },
  // ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Startup,
          <br />
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : "Latest Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupcardType, index: number) => (
              <StartupCard key={posts?._id} post={post} />
            ))
          ) : (
            <p className="no-result">No Results Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
