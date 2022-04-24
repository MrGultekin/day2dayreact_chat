import './App.css';
import {ChatEngine} from "react-chat-engine";

import(ChatEngine)
const projectID = 'f36113f7-5bc3-487a-80c4-4a1c183c390d ';

function App() {
    return (
        <div className="App">
            <ChatEngine
                height="100vh"
                projectID= {projectID}
                userName = "Mr.Rose"
                userSecret = "Mr.Rose"

            />
        </div>
    );
}

export default App;
