import Card from "./components/Card";
// import BlogPost from "./components/BlogPost";
// import { videos } from "./video-data";
import { techPosts } from "./tech-data";
// import { lazy, Suspense } from "react";
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


/* ** Error Boundary Case ** 
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
};*/

/* Exercise */

const App = () => {
  const darkMode = true;
  const styles = darkMode ? {color : 'white', backgroundColor: 'black'} : { color: 'black', backgroundColor: 'white'};

  return (
      <div style={{ ...styles, color: 'gray', fontFamily: 'sans-serif', textAlign: 'center'}}>
      {
      techPosts.map((tech) => (
          <Card key={tech.id} video={tech} />
      ))
      }
      </div>
  )

}

export default App;
