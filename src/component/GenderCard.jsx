function GenderCard(props) {
  const { person, age } = props;

  let ageEvaluation;
  if (age <= 18) {
    ageEvaluation = <h4>Minor</h4>
  } else {
    ageEvaluation =  <h4>Legal</h4>
  }

  return (
    <>   
        <div className="container row row-cols-1 row-cols-md-2 g-4 mt-3 shadow bg-secondary">
          <div className="col">
            <div className={`card ${age <= 18 ? 'bg-warning' : 'bg-success'}`}>
              <div className="card-body">
                <p>Person: <span className="fw-bold">{person}</span></p>
                <p>Age: <span className="fw-bold">{age}</span></p>
                {ageEvaluation}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default GenderCard