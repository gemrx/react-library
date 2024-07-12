import './Topbar.css'

export default function Topbar() {
    return (
        <>
            <div className="topbar">
                <div className="topbar__logo">My Library</div>
                <button className="topbar__open-modal-button">Add book</button>
            </div>
        </>
    );
}