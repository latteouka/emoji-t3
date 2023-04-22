import { type NextPage } from "next";
import Head from "next/head";

const PostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <main className="flex justify-center">
        <div className="h-screen w-full border-x border-slate-400 md:max-w-2xl">
          <div className="flex border-b border-slate-400 p-4">Post</div>
        </div>
      </main>
    </>
  );
};

export default PostPage;
