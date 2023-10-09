function SanPham(props) {
    return(
        <div className="san_pham">
            <img src={props.data.hinh_anh}/>
            <p>{props.data.ten}</p>
            <p>{props.data.gia}</p>
            <button>Chọn Mua</button>
        </div>
    )
}
export default SanPham;