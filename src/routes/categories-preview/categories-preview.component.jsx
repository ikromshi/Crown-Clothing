import { selectCategoriesMap, selectCategoriesIsLoading  } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
// import { CategoriesContext } from "../../contexts/categories.context";
import Spinner from "../../components/spinner/spinner.component";
import { useContext, Fragment } from "react";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
	// const { categoriesMap } = useContext(CategoriesContext);
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	return (
    <Fragment>
			{ isLoading ? (<Spinner />) :
			(Object.keys(categoriesMap).map(title => {
				const products = categoriesMap[title];
				return (
					<CategoryPreview key={title} title={title} products={products}></CategoryPreview>
				);
			}))
			}
		</Fragment>
	)
}
  
export default CategoriesPreview;