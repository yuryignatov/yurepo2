import React from 'react'

function App() {
  const [seconds, setSeconds] = React.useState(30);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      alert('111');
    }
  });

  return (
    <div className="App">
      <div>
        {seconds}
      </div>
    </div>
  );
}

export default App;
