import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {

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
}`);
