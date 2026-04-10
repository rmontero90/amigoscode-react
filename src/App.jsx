import "./App.css";
import Card from "./components/Card";
import BlogPost from "./components/BlogPost";
import { videos } from "./video-data";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";


/* ** Suspense Case ***
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

*/


/* ** Error Boundary Case ** */

const Details = lazy(() => {
  return Promise.reject
});

const App = () => {
  const showDetails = true;

return showDetails && (
    <>
    <ErrorBoundary fallback={<div>Something has gone wrong</div>} ><Details /></ErrorBoundary>
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
