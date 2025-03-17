import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: "yesterday",
      _id: 1,
      title: "Title",
      description: "Description",
      category: "Small Business",
      views: 55,
      author: {
        _id: 1,
        name: "Name",
        image: "Image",
      },
      link: "Link",
      pitch: "Pitch",
    },
  ];

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
