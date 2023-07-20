import './Header.css'
function Header(props) {
    const {setEdit}=props;
    const handleEdit = () => {
        setEdit(true)
    }
    return (
        <>
        <header 
        style={{
            backgroundColor:"#ff9051",
            backgroundImage:"linear-gradient(180deg,#ff9051 2% , #ff9051,65%,#181818 100%)" 
            }}>
            <div className="info-container">
                <div className="info-edit" onClick={handleEdit}>
                    Edit
                </div>
                <img src="https://i.redd.it/lfs78sg5t7w61.png" alt="redit" className="info-ava" />
                <div className="info-username">Minh Duy</div>
                <div className="info-age">20 tuổi</div>
                <div className="info-about">I'm develop</div>
            </div>
        </header>
        </>
      );
}

export default Header;