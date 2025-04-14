import Hello from "./components/Hello";
import ImageSlider from './components/ImageSlider';
import ContentSlider from './components/ContentSlider';


// This is a server component
export default function Home() {

  console.log("what im I, Server or Client?");
  return (

    <>
      <ImageSlider />
      <ContentSlider />
      <Hello />
    </>

  );
}
