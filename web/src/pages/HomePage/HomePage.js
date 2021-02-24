import { Link, routes } from "@redwoodjs/router";
import RepoListCell from "src/components/RepoListCell";

const HomePage = () => {
  return (
    <>
      <h1>List of Repos in the DB</h1>

      <div class="">
        <div class="flex max-w-xl my-10 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
          <RepoListCell />
        </div>
      </div>
    </>
  );
};

export default HomePage;
