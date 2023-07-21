import './Footer.css'
function Footer(props) {
    const {isOpenPost,setOpenPost}=props;
    const handleClick = () =>{
        setOpenPost(!isOpenPost) // thêm dấu ! sẽ làm cho khi isPoenPost(false) -> true và ngược lại
        // như chức năng bật tắt nếu ko thêm thì chỉ đc f->t chứ kh đc t->f
    }
    return (
        <footer>
            <div className="footer-title" onClick={handleClick}>
                {isOpenPost ? "x" : "+"}
            </div>
        </footer>
      );
}

export default Footer;