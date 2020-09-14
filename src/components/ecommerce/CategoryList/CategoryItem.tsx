// React
import { FC, useContext } from "react";
// Types
import { ICategory } from "interfaces/ecommerce";
// AntD
import { Col, Card } from "antd";
// Router
import Link from "next/link";
// Context
import { SkeletonListContext } from "contexts/ecommerce";

const { Meta } = Card;

interface ICategoryItem {
	category: ICategory;
}

const CategoryItem: FC<ICategoryItem> = ({ category }) => {
	const { xl, md, sm, lg, xs } = useContext(SkeletonListContext);
	const { name, description, image } = category;
	const featured_image = image?.src ?? "";

	return (
		<Col xl={xl} lg={lg} md={md} sm={sm} xs={xs} className="centered-col">
			<Link
				href="/ecommerce/[...category]"
				as={`/ecommerce/category/${category._id}`}
				key={category._id}
			>
				<Card
					className="category-item-card"
					hoverable
					cover={
						featured_image ? <img alt="example" src={featured_image} /> : null
					}
				>
					<Meta title={name} description={description} />
				</Card>
			</Link>
		</Col>
	);
};

export default CategoryItem;
