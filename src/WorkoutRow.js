import "./workoutrow.css";
const WorkoutRow = ({ workout }) => {
  return (
    <>
      <div className="workout_row">
        <div className="workout__image__div">
          <img src={workout?.url} className="workout__image" />
        </div>
        <div className="workout__content">
          <label className="workout__name">{workout?.name}</label>
        </div>
      </div>
    </>
  );
};

export default WorkoutRow;
