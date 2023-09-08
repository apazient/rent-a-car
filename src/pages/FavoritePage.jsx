import React from "react";
import { useSelector } from "react-redux";
import CarDetails from "../components/CarDetails/CarDetails";
import FavoriteItem from "../components/FavoriteItem/FavoriteItem";
import Modal from "../components/Modal/Modal";
import { selectFavoriteCars } from "../redux/Favorite/selectors";
import { selectIsModalDetailOpen } from "../redux/Global/selectors";

const FavoritePage = () => {
  const data = useSelector(selectFavoriteCars);
  const isModalDetail = useSelector(selectIsModalDetailOpen);
  console.log(data);
  return (
    <div>
      <ul>
        {data.map((post) => (
          <FavoriteItem key={post.id} {...post} />
        ))}
      </ul>
      {isModalDetail && (
        <Modal>
          <CarDetails />
        </Modal>
      )}
    </div>
  );
};

export default FavoritePage;
