//props = read-only properties that over shared components.
//        A parent component can send date to a child component.
//        <Component key=value>
import Student from "./Student.jsx";
function App() {
    return (
        <>
        <Student name="Spongebob" age={32} isStudent={true} />
        <Student name="Patrick" age={42} isStudent={false} />
        <Student name="squidward" age={50} isStudent={false} />
<Student/>
        </>
    );

}
export default App
