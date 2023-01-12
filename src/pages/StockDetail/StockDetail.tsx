import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import style from "./StockDetail.module.css";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import AlertDialog from "../../components/AlertDialog";
import { useParams } from "react-router-dom";
import axios from "axios";

export type GoodsType = {
  id: number;
  image: string;
  name: string;
  amount: number;
};

// const AlertDialog = () =>{
//   return <Dialog open={open} onClose={callBack}>
//   <DialogTitle>{title}</DialogTitle>
//   <DialogContent>
//     <Dialog
//     ContentText>{text}</Dialog>
//   </DialogContent>
//   <DialogActions>
//     <Button onClick={callBack}>cancle</Button>
//     <Button onClick={callBack} autoFocus>
//       sure
//     </Button>
//   </DialogActions>
// </Dialog>
// }

function StockDetail() {
  const [goods, setGoods] = useState<GoodsType[]>([]);
  const params = useParams<{ prodId: string }>();

  useEffect(() => {
    axios
      .get(
        `https://winsmoke-backend.vercel.app/api/product_type/${params.prodId}`
      )
      .then((res) => setGoods(res.data.product));
  }, [params.prodId]);

  return (
    <div>
      <h1>Stock Detail</h1>
      {goods.map((prod) => {
        return (
          <div key={prod.id} className={style.box}>
            <div className={style.pic}>
              <img alt={prod.name} src={prod.image} />
            </div>
            <div className={style.content}>
              <div className={style.name}>{prod.name}</div>
              <div className={style.detail}>
                <div>amount : {prod.amount}</div>
                <div className={style.button}>
                  <IconButton
                    onClick={() =>
                      axios.put(
                        `https://winsmoke-backend.vercel.app/api/product/${prod.id}`,
                        { number: 1 }
                      )
                    }
                    size="small"
                  >
                    <AddCircleIcon fontSize="large" color="success" />
                  </IconButton>
                  <IconButton
                    onClick={() =>
                      axios.put(
                        `https://winsmoke-backend.vercel.app/api/product/${prod.id}`,
                        { number: -1 }
                      )
                    }
                    size="small"
                  >
                    <RemoveCircleIcon fontSize="large" color="error" />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StockDetail;
