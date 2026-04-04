import "./Roadmap.css";

const Roadmap = ({ steps }) => {
  return (
    <div className="roadmap-wrapper">
      <h3>Learning Roadmap</h3>

      <div className="roadmap-flow">
        {steps.map((step, index) => (
          <div key={index} className="roadmap-card">
            <span className="roadmap-step">{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
