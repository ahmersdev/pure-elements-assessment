import { Box, Drawer, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useCheckout from "./use-checkout";

export default function Checkout() {
  const {
    cartModal,
    onClose,
    cartItems,
    handleIncrementQuantity,
    handleDecrementQuantity,
    handleRemoveItem,
    subtotal,
  } = useCheckout();

  return (
    <Drawer
      open={cartModal}
      onClose={onClose}
      anchor="right"
      PaperProps={{ square: false }}
    >
      <Box width={{ xs: "90vw", md: "35vw" }} p={2}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant={"h4"}>
            {cartItems.length
              ? `${cartItems.length} Product Added to Your Cart`
              : "Add Items to your cart!"}
          </Typography>
          <Typography
            variant={"h4"}
            sx={{ cursor: "pointer" }}
            onClick={onClose}
          >
            X
          </Typography>
        </Box>

        <Grid container spacing={2} mt={1}>
          {cartItems.map((item: any) => (
            <Grid item xs={12} key={item.cart_id}>
              <Box display={"flex"} gap={2}>
                <img src={item?.coverImage} alt={item?.title} width={"100px"} />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Typography variant={"h6"}>{item.title}</Typography>

                  <Typography variant={"h5"}>
                    {item?.regular_price} AED
                  </Typography>

                  <Typography variant={"h5"}>{item?.size}</Typography>

                  <Box display={"flex"} alignItems={"center"} gap={2} mt={2}>
                    <RemoveIcon
                      onClick={() => handleDecrementQuantity(item.cart_id)}
                      sx={{ cursor: "pointer" }}
                    />

                    <Typography>{item.quantity}</Typography>

                    <AddIcon
                      onClick={() => handleIncrementQuantity(item.cart_id)}
                      sx={{ cursor: "pointer" }}
                    />

                    <DeleteForeverIcon
                      onClick={() => handleRemoveItem(item.cart_id)}
                      sx={{ cursor: "pointer" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}

          {cartItems.length ? (
            <Grid
              item
              xs={12}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant={"h5"}>Sub Total</Typography>

              <Typography variant={"h5"}>{subtotal} AED</Typography>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <Typography variant={"h5"}>No Items in Cart</Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Drawer>
  );
}
