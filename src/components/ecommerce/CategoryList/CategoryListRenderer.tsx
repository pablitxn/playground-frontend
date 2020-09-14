// Types
import { FC } from "react";
import { ICategory } from "interfaces/ecommerce";
// Components
import CategoryList from "./CategoryList";
import SkeletonList from "../SkeletonList/SkeletonList";
// Context
import { SkeletonListContext, Breakpoints } from "contexts";

interface ICategoryListRenderer {
	categories: ICategory[];
	breakpoints: Breakpoints;
}

const CategoryListRenderer: FC<ICategoryListRenderer> = ({
	categories,
	breakpoints
}) => {
	return (
		<SkeletonListContext.Provider value={breakpoints}>
			{categories.length === 0 ? (
				<SkeletonList itemCount={3} />
			) : (
				<CategoryList categories={categories} />
			)}
		</SkeletonListContext.Provider>
	);
};

export default CategoryListRenderer;
