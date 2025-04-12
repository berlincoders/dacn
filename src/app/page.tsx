import Hello from "./components/Hello";
import ImageSlider from './components/ImageSlider';


// This is a server component
export default function Home() {

  console.log("what im I, Server or Client?");
  return (

    <>
      <ImageSlider />
      <Hello />
    </>

  );
}
