import SanPham from "./san_pham";

function LoaiSanPham(props){
    const listSanPham = props.data.ds_san_pham.map(function(item){
        return (
            <SanPham data={item}/>
        );
    });

    return (
        <>
        <h1 className="ten-loai-san-pham">{props.data.ten}</h1>
        <div>{listSanPham}</div>
        </>
    );
}
export default LoaiSanPham;