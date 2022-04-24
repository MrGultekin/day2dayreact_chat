import './App.css';
import {ChatEngine, ChatFeed} from "react-chat-engine";

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
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            />
        </div>
    );
}
export default App;
