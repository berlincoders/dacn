import Hello from "./components/Hello";
import TopNavBar from "./components/TopNavBar";

// This is a server component
export default function Home() {

  console.log("what im I, Server or Client?");
  return (

    <>
      <TopNavBar />
      <Hello />
    </>

  );
}
