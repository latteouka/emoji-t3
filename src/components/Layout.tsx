import { PropsWithChildren } from "react";

const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex justify-center">
      <div className="h-screen w-full border-x border-slate-400 md:max-w-2xl">
        {props.children}
      </div>
    </main>
  );
};
export default PageLayout;
