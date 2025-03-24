export const STARTUPS_QUERY = `*[_type == "startup"] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  description,
  category,
  views,
  author->{
    id,
    name
  },
  image
}`;
