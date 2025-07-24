import profilePic from './assets/profile.jpg'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">صلاح الدین</h2>
            <p className="card-text">طرحی برای انجام</p>
        </div>
    );
}
export default Card