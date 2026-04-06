import "./App.css";
import Card from "./components/Card";
import BlogPost from "./components/BlogPost";
import { videos } from "./video-data";
import { lazy, Suspense } from "react";

const Details = lazy(async() => {
  await new Promise((res) => setTimeout(res, 2000));
  return await import('./components/Details');
});

const App = () => {
  const showDetails = true;

return showDetails && (
    <>
    <Suspense fallback={<div>Loading...</div>} ><Details /></Suspense>
     {videos.map(video => (
        <Card 
          key={video.id}
          video={video}
        />
      ))} 
    </>
  );
};

export default App;
