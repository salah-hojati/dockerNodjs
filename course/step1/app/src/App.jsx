// conditional rendering = allows you to control what gets rendered
// if your application based on certain condition
//(show ,hide ,or change component)
import UserGreeting from "./UserGreeting.jsx";

function App() {
    return (
        <>
            <UserGreeting isLoggedIn={false} username="salah"/>
        </>
    );

}
export default App
