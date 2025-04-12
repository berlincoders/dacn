import Hello from "./components/Hello";


// This is a server component
export default function Home() {

  console.log("what im I, Server or Client?");
  return (

    <>
      <Hello />
    </>

  );
}
