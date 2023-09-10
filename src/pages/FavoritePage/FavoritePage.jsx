import React from "react";
import { useSelector } from "react-redux";
import CarDetails from "../../components/CarDetails/CarDetails";
import FavoriteItem from "../../components/FavoriteItem/FavoriteItem";
import Modal from "../../components/Modal/Modal";
import { selectFavoriteCars } from "../../redux/Favorite/selectors";
import { selectIsModalDetailOpen } from "../../redux/Global/selectors";
import { WrapperCatalog } from "../../styles/SharedStyles";
import { Gallery } from "./FavoritePage.styled";

const FavoritePage = () => {
  const data = useSelector(selectFavoriteCars);
  const isModalDetail = useSelector(selectIsModalDetailOpen);

  return (
    <WrapperCatalog>
      <Gallery>
        {data.map((post) => (
          <FavoriteItem key={post.id} {...post} />
        ))}
      </Gallery>
      {isModalDetail && (
        <Modal>
          <CarDetails />
        </Modal>
      )}
    </WrapperCatalog>
  );
};

export default FavoritePage;
