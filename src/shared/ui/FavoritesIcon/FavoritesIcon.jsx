export const FavoritesIcon = ({ addToFavorites }) => {
  const handleAddToFavorites = () => {
    addToFavorites();
  };
  return (
    <span className="icon-heart product-link__icon" onClick={handleAddToFavorites}></span>
  );
};
