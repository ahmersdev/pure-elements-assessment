import { Box, Grid, Skeleton, Typography } from "@mui/material";
import useHome from "./use-home";
import { QUANTITY } from "../../constants";

export default function Home() {
  const { isLoading, isFetching, isError, data, handleAddToCart } = useHome();

  if (isLoading || isFetching)
    return (
      <Grid container spacing={2} p={2}>
        {[1, 2, 3, 4].map((item: any) => (
          <Grid item xs={12} sm={6} md={3} key={item}>
            <Skeleton variant="rounded" height={500} />
          </Grid>
        ))}
      </Grid>
    );

  if (isError)
    return (
      <Box
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography variant={"h2"} color={"error.main"}>
          Something Went Wrong!
        </Typography>
      </Box>
    );

  return (
    <Grid container spacing={2} p={2}>
      {data?.data?.map((item: any) => (
        <Grid item xs={12} sm={6} md={3} key={item?.id}>
          <img src={item?.cover_image} alt={item?.title} width={"100%"} />
          {item.variants && (
            <Box display={"flex"} justifyContent={"space-between"}>
              {item?.variants?.map((variant: any) => (
                <Typography
                  variant={"h5"}
                  key={variant?.id}
                  sx={{
                    textDecoration: `${
                      variant?.quantity === QUANTITY ? "line-through" : "none"
                    }`,
                    cursor: `${
                      variant?.quantity === QUANTITY ? "default" : "pointer"
                    }`,
                  }}
                  onClick={() => handleAddToCart(item, variant?.size)}
                >
                  {variant?.size}
                </Typography>
              ))}
            </Box>
          )}
          <Typography variant={"h6"}>{item?.title}</Typography>
          <Typography variant={"h5"}>{item?.regular_price} AED</Typography>
        </Grid>
      ))}
    </Grid>
  );
}
