import {BackgroundImage, BodyContainer, CategoryContainer } from "./category-item.styles.jsx";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);

    return (
      <CategoryContainer onClick={onNavigateHandler}>
        <BackgroundImage imageUrl={imageUrl}/>
        <BodyContainer>
          <h2>{title}</h2>
          <p>Shop now</p>
        </BodyContainer>
      </CategoryContainer>
    )
}

export default CategoryItem;