import React from "react";

const CallMe = () => {
  const [result, setResult] = React.useState("Fetching...");

  React.useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setResult(data.hello))
      .catch(_ => setResult("Damn could not fetch"));
  }, [result]);
  
  return (
    <div>
      <h2>Result : {result}</h2>
    </div>
  )
}

export default CallMe;
