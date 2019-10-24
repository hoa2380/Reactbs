import  React from 'react';



const sanPham = (props) =>{
    return(
        <div>
            <p>Tên Sản Phẩm : { props.tenSanPham } </p>
            <p>Mã Sản Phẩm : { props.maSanPham }</p>
            <p>Giá : { props.giaSanPham }</p>
            <p> Mô tả Sản Phẩm : { props.children } </p>
            
        </div>
    );

}
export default sanPham;