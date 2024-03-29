import { Layout } from "@/components/Layout";
import { Blogs } from "@/components/Blog/Blogs";
import { useSession } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import SignIn from "@/components/session/SignIn";
import { getClient } from "@/lib/sanity.server";
import groq from "groq";

const Blog = ({ blogs }) => {
  useEffect(() => {
    localStorage.setItem("pathname", "blog");
  }, []);

  return (
    <>
      <Layout title={"Blog"} content={"Consultora Enlazar."}>
        <Blogs blogs={blogs} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const blogs = await getClient().fetch(
    groq`*[_type == "blog"] | order(order asc){
      _id,
      titleSEO,
      SEOdescription,
      title,
      body,
      description,
      slug,
      mainImage
    }`
  );

  return {
    props: {
      blogs,
    },
    revalidate: 1,
  };
}

export default Blog;
