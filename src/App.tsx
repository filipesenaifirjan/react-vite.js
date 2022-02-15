import { Tweet } from "./components/tweet";
import{ useState } from "react"

function App() {
  const [tweets, setTweets]  = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
  ])
  return (
     <div>  
    <Tweet text="Tweet 1"/>
    <Tweet text="Tweet 2"/>
    <Tweet text="Tweet 3"/>
    <button> Adicionar tweet</button>
    </div>
  );
}

export default App
