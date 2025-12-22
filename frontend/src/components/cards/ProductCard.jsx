import { Box, IconButton, Rating, Typography } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useAddFavoriteProductMutation } from "../../services/favoriteServices";
import { useQualifyProductMutation } from "../../services/productService";

import { useEffect } from "react";
import { useState } from "react";

const ProductCard = ({ product, userId, sx = {} }) => {
  const [rating, setRating] = useState(product?.score || 0);

  const [addFavoriteProduct, { data, error, isSuccess, isError, isLoading }] =
    useAddFavoriteProductMutation();

  const [
    qualifyProduct,
    {
      data: qualifyNumberData,
      error: qualifyNumberError,
      isSuccess: isSuccessQualifyNumber,
      isError: isErrorQualifyNumber,
      isLoading: isLoadingQualifyNumber,
    },
  ] = useQualifyProductMutation();

  const handleAddFavoriteProduct = () => {
    addFavoriteProduct({ userId, productId: product?._id });
  };

  useEffect(() => {
    if (isSuccess) alert(data?.message);
    if (isError) alert(error?.data?.message);
  }, [isSuccess, isError, data, error]);

  return (
    <Box
      sx={{
        minWidth: "300px",
        minHeight: "320px",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        gap: 1.5,
        borderRadius: 3,
        backgroundColor: "#ffffff",
        boxShadow: 3,
        ...sx,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "250px",
          backgroundColor: "#f2f2f2",
          borderRadius: 2,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={`data:image/png;base64,${product?.image}`}
          alt={product?.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Typography variant="h6">{product?.name}</Typography>

      <Typography color="text.secondary">
        Stock: {product?.status === "No disponible" ? 0 : product?.stock}
      </Typography>

      <Typography color="text.secondary">Status: {product?.status}</Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        <Rating
          value={rating}
          size="medium"
          onChange={(event, newValue) => {
            if (!newValue) return;

            setRating(newValue);
            qualifyProduct({
              productId: product._id,
              qualifyNumber: newValue,
            });
          }}
        />

        {product?.isFavorite ? (
          <IconButton onClick={handleAddFavoriteProduct}>
            <FavoriteIcon sx={{ fill: "red" }} />
          </IconButton>
        ) : (
          <IconButton onClick={handleAddFavoriteProduct}>
            <FavoriteBorderIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default ProductCard;
