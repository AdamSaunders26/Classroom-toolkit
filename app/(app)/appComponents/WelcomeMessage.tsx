import LogInOutButton from "./LogInOutButton";

export default function WelcomeMessage() {
  return (
    <section className="border-4 border-ctyellow rounded-xl p-4 text-white bg-ctblue col-start-2 row-start-2 flex flex-col justify-around items-center shadow-md h-fit">
      <article className="mb-4">
        Welcome to Classroom Toolkit! This website is currently a work in
        progress but when it is finished, it will contain a plethora of tools
        designed to make teachers lives just that little bit easier. Many
        features can be used without an account, but if you would like to access
        the trackers and store classes you will need to log in, which you can do
        by clicking the button below.
      </article>
      <LogInOutButton header={false} />
    </section>
  );
}
