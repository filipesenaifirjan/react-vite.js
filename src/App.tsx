import { Tweet } from "./components/tweet";
import{ useState } from "react";
import './components/App.css';

function App() {
  const [tweets, setTweets]  = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
  ])

  function createTweet() {
    setTweets([...tweets, 'tweet 5'])

  }
  return (
     <div>  
    {tweets.map (tweet => {
      return <Tweet text={tweet} />
    })}
    <button
     onClick={createTweet}
    style={{
      backgroundColor: '#8257e6',
      border:0,
      padding: '6px, 12px',
      color: '#fff',

    }}
     
     > Adicionar tweet</button>
    </div>
  );
}

export default App
