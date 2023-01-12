import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import style from "./StockDetail.module.css";
import { IconButton } from "@mui/material";
import AlertDialog from "../../components/AlertDialog";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function StockDetail() {
  // const handleCheck = () =>{
  //   return <AlertDialog open={true} callBack={()=>{}} title="cdkjefop" text="ncdej"  />
  // }

  let query = useQuery();
  console.log(query);
  

  return (
    <div>
      <h1>Stock Detail</h1>
      <div className={style.box}>
        <div className={style.pic}>
          <img
            alt=""
            src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/322702682_860964275046536_6497300217783796871_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=ujcgo6rpWMsAX_bFzLX&_nc_ht=scontent.fbkk6-2.fna&oh=00_AfDyuBOQ0hjP00b3-2Il0QhME7i6rJsGUnhYrLRf-ElxWA&oe=63C59C33"
          />
        </div>
        <div className={style.content}>
          <div className={style.name}>name</div>
          <div className={style.detail}>
            <div>total : 20</div>
            <div className={style.button}>
              <IconButton  size="small">
                <AddCircleIcon fontSize="large" color="success"/>
              </IconButton>
              <IconButton  size="small">
                <RemoveCircleIcon fontSize="large"  color="error"/>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockDetail;


