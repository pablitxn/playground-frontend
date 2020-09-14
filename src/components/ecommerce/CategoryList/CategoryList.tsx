// Types
import { FC } from "react";
import { ICategory } from "interfaces/ecommerce";
// Components
import CategoryItem from "./CategoryItem";
import MainRowLayout from "../MainRowLayout/MainRowLayout";
// Styles
import "./CategoryList.less";

interface CategoryListProps {
	categories: ICategory[];
}

const CategoryList: FC<CategoryListProps> = ({ categories }) => {
	return (
		<MainRowLayout>
			{categories?.map((category, i) => {
				return <CategoryItem category={category} key={i} />;
			})}
		</MainRowLayout>
	);
};

export default CategoryList;
