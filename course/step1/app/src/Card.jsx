import profilePic from 'assets/profile.jpg'
function Card() {
    return (
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2>صلاح الدین</h2>
            <p>طرحی برای انجام</p>
        </div>
    );
}
export default Card