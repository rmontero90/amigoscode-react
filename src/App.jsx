import "./App.css";
import Card from "./components/Card";
import Details from "./components/Details";
import BlogPost from "./components/BlogPost";

const App = () => {
  return (
    <>
      <BlogPost title="5 Simple Steps to Maximize Your Home's Garden Harvest">
        <p>
          {' '}
          Transform your home garden into a thriving heaven for fresh produce!
        </p>
        <p>
          Discover how to select the right crops, optimize your planting space,
          and implement sustainable practices for long-lasting success.
        </p>
      </BlogPost>
    </>
  );
};

export default App;
