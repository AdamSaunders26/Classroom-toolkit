import Image from "next/image";
import LogInOutButton from "./appComponents/LogInOutButton";

export default function Home() {
  return (
    <main className="grid grid-cols-3 grid-rows-3 h-full">
      <section className="border-4 col-start-2 row-start-2 flex flex-col justify-around items-center ">
        <article>
          Welcome to Classroom Toolkit! This website is currently a work in
          progress but when it is finished, it will be contain a plethora of
          tools designed to make teachers lives just that little bit easier.
          Many features can be used without an account, but if you would like to
          access the trackers and store classes you will need to log in, which
          you can do by clicking the button below.
        </article>
        <LogInOutButton />
      </section>
    </main>
  );
}
