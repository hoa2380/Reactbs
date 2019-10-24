import React from 'react';



const sinhVien = (props) =>{
    return(
        <div>
            <p>{ props.hoten } - Tuổi : { props.tuoi }</p>
            <p> Sở thích : { props.sothich } </p>
            {/* <p>Hoàng Thị Tí - Tuổi: { inTuoi() }</p>
            <p>Hoàng Thị Xí - Tuổi : { inTuoi() }</p> */}
        </div>
    );

}
export default sinhVien;