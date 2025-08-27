// src/app/page.tsx
export default async function RootPage() {
  const res = await fetch(

    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?filters[Slug][$eq]=home&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    return <div>Failed to load home page</div>;
  }

  const data = await res.json();
  const page = data.data?.[0];

  if (!page) {
    return <div>Home page not found in Strapi</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{page.Title}</h1>
      <p className="text-gray-600 mt-4">{page.seoDescription}</p>
    </div>
  );
}
