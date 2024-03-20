import { Box, Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetProductsQuery, useAddToCartMutation } from "../../api/capstoneApi";
import { useSelector } from "react-redux";

const Store = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const [addToCart] = useAddToCartMutation();
  const userId = useSelector((state) => state.user.id);

  const handleAddToCart = async (productId) => {
    const quantity = 1;

    try {
      console.log(userId);
      await addToCart({ userId, productId, quantity });

      console.log("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {data.map((product) => (
            <Card key={product.id} sx={{ minWidth: 275, maxWidth: 300, m: 1 }}>
              <CardContent>
                <img
                  src={`data:image/png;base64, ${product.image}`}
                  alt="Product Image"
                  style={{
                    height: "200px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <p>{product.name}</p>
                <p>${product.price}</p>
              </CardContent>
              <div style={{ textAlign: "center" }}>
                <Link to={`/products/${product.id}`}>
                  <Button>See Details</Button>
                </Link>
                <Button onClick={() => handleAddToCart(product.id)}>
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </Box>
      )}
    </div>
  );
};

export default Store;
