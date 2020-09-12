// Types
import { FC } from "react";
import { IProductCategory } from "interfaces/ecommerce";
// Components
import CategoryList from "./CategoryList";
import SkeletonList from "../SkeletonList/SkeletonList";
// Context
import { SkeletonListContext, Breakpoints } from "contexts";

interface CategoryListRendererProps {
	categories: IProductCategory[];
	breakpoints: Breakpoints;
}

const CategoryListRenderer: FC<CategoryListRendererProps> = ({
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
