// src/app/[slug]/page.tsx
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?filters[Slug][$eq]=${params.slug}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
      next: { revalidate: 60 }, // cache for 1 min
    }
  );

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();

  if (!data.data || data.data.length === 0) {
    return notFound();
  }

  const page = data.data[0];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{page.Title}</h1>
      <p className="text-gray-600 mt-2">{page.seoDescription}</p>
    </div>
  );
}
