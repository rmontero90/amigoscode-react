import Card from "./components/Card";
// import BlogPost from "./components/BlogPost";
// import { videos } from "./video-data";
import { techPosts } from "./tech-data";
// import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
// import './App.css';
import styles from "./App.module.css";


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
  const darkModeClass = darkMode ? styles['dark-mode'] : styles['light-mode']

  return (
      <div className={` ${styles.wrapper} ${darkModeClass}`}>
      {
      techPosts.map((tech) => (
          <Card key={tech.id} video={tech} />
      ))
      }
      </div>
  )

}

export default App;
