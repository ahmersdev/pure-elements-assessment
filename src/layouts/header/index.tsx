import { Badge, Box } from "@mui/material";
import FullLogo from "../../assets/full-logo.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import Checkout from "./checkout";
import { openModal } from "../../store/slices/cart-modal-slice";
import useHeader from "./use-header";

export default function Header() {
  const { cartItems, dispatch, cartModal } = useHeader();

  return (
    <Fragment>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"common.white"}
        p={2}
      >
        <Link to="/">
          <img
            src={FullLogo}
            alt={"Pure Elements"}
            style={{ maxWidth: "14rem" }}
          />
        </Link>

        <Badge
          badgeContent={cartItems.length}
          color="primary"
          sx={{ cursor: "pointer" }}
          onClick={() => dispatch(openModal())}
        >
          <LocalMallIcon />
        </Badge>
      </Box>

      {cartModal && <Checkout />}
    </Fragment>
  );
}
