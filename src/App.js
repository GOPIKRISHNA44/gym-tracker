import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import WorkoutRow from "./WorkoutRow";
import workouts from "./Workouts";

function App() {
  const [workoutFind, setWorkoutFind] = useState("");
  const [workoutList, setWorkoutList] = useState(workouts);
  const list = [];
  for (const [i, workout] of workoutList.entries()) {
    list.push(<WorkoutRow workout={workout} />);
  }

  return (
    <div className="app">
      <SearchBar />
      <div className="workoutRows_holder">{list}</div>
    </div>
  );
}

const SearchBar = () => {
  return (
    <div className="app_search">
      <input type="text" className="text_search" />
      <div className="tnb-google-search-submit-btn">
        <svg
          id="tnb-google-search-icon"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="search_icon"
        >
          <path
            d="M11.8153 10.3439C12.6061 9.2673 13.0732 7.9382 13.0732 6.5C13.0732 2.91015 10.163 0 6.57318 0C2.98333 0 0.0731812 2.91015 0.0731812 6.5C0.0731812 10.0899 2.98333 13 6.57318 13C8.01176 13 9.3412 12.5327 10.4179 11.7415L10.4171 11.7422C10.4466 11.7822 10.4794 11.8204 10.5156 11.8566L14.3661 15.7071C14.7566 16.0976 15.3898 16.0976 15.7803 15.7071C16.1708 15.3166 16.1708 14.6834 15.7803 14.2929L11.9298 10.4424C11.8936 10.4062 11.8553 10.3734 11.8153 10.3439ZM12.0732 6.5C12.0732 9.53757 9.61075 12 6.57318 12C3.53561 12 1.07318 9.53757 1.07318 6.5C1.07318 3.46243 3.53561 1 6.57318 1C9.61075 1 12.0732 3.46243 12.0732 6.5Z"
            fill="black"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default App;
