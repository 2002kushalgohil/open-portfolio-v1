export default function ExperienceDetails({ data }) {
  return (
    <div className="experienceModal">
      <div className="experienceModalSub1">
        <img src={data.logo} className="experienceLogo" alt="Logo"/>
        <div className="experienceModalSub1Main">
          <p>{data.date}</p>
          <h2>{data.position}</h2>
          <p>{data.company}</p>
        </div>
      </div>
      <div className="experienceModalSub2">
        <div className="subHeading">
          <h2>Achievements/Tasks</h2>
        </div>
        <ul className="experienceTasks">
          {data?.tasksAndAchievements?.map((data, index) => {
            return <h2 key={index}>{index + 1 + ". " + data}</h2>;
          })}
        </ul>
      </div>
    </div>
  );
}
