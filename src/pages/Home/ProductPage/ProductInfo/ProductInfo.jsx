import "./ProductInfo.scss";
import { useNavigate } from "react-router-dom";
import { BackIcon } from "../../../../shared/ui/BackIcon/BackIcon";
import { FavoritesIcon } from "../../../../shared/ui/FavoritesIcon/FavoritesIcon";

export const ProductInfo = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const addToFavorites = () => {
    navigate("/favorites");
  };

  const backgroundImageUrl = "/src/assets/img/home/bg-info.png";

  const productStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  const product = {
    title: "Robusta Beans",
    desc: "From Africa",
    rating: 4.5,
    ratingCount: '6,879',
    beanRoasted: 'Medium Roasted',
  };

  return (
    <div className="product" style={productStyle}>
      <div className="product-icons">
        <BackIcon goBack={goBack} />
        <FavoritesIcon addToFavorites={addToFavorites} />
      </div>
      <div className="product__group">
        <div className="product-info">
          <h5 className="product-info__title">{product.title}</h5>
          <p className="product-info__desc">{product.desc}</p>
          <div className="product-info__rating">
            <span className="icon-star"></span>
            {product.rating}
            <span>({product.ratingCount})</span>
          </div>
        </div>
        <div className="product-bean">
          <div className="product-bean__group">
            <div className="product-bean__info bean-content">
              <span className="icon-coffee"></span>Coffee
            </div>
            <div className="product-bean__info bean-content">
              <span className="icon-location"></span>Milk
            </div>
          </div>
          <p className="product-bean__roasted bean-content">{product.beanRoasted}</p>
        </div>
      </div>
    </div>
  );
};
