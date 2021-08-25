import { Link, routes } from "@redwoodjs/router";
import RepoListCell from "src/components/RepoListCell";

const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        flava-flav
      </h1>
      <p>
        Open Source recommendations, but Saucy.
      </p>
      <Link className="text-indigo-600 underline" to="/repositories">
        <button>Add a repository</button>
      </Link>
      <div class="flex max-w-xl mx-auto">
        <div class="flex items-center w-full">
          <RepoListCell />
        </div>
      </div>
      <footer>
        <small>Yelp for Open Source, Y'all.</small>
      </footer>
    </div>
  );
};

export default HomePage;
