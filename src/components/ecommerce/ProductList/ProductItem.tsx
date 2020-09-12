// React
import { FC, useContext } from "react";
// Types
import { IProduct } from "interfaces/ecommerce";
// AntD
import { Row, Col, Card, Typography, Button } from "antd";
// Router
import Link from "next/link";
// Contexts
import { SkeletonListContext } from "contexts";

const { Text } = Typography;

interface ISaleProductItem {
	product: IProduct;
}

const SaleProductItem: FC<ISaleProductItem> = ({ product }) => {
	const { xl, md, sm, lg, xs } = useContext(SkeletonListContext);
	const {
		id,
		slug,
		name,
		regular_price,
		sale_price,
		on_sale,
		images = []
	} = product;
	const featured_image = images.length > 0 ? images[0].src : "";
	return (
		<Link href="/product/[...product]" as={`/product/${id}/${slug}`}>
			<Col xl={xl} lg={lg} md={md} sm={sm} xs={xs} className="centered-col">
				<Card
					hoverable
					cover={
						featured_image ? <img alt="example" src={featured_image} /> : null
					}
				>
					<Row>
						<Text style={{ textAlign: "center" }} strong>
							{name}
						</Text>
						{on_sale && <Button style={{ marginLeft: 10 }}>Sale!</Button>}
					</Row>
					<Row>
						<Text type="secondary" delete={on_sale}>
							{`$${regular_price}`}
						</Text>
						{on_sale && (
							<Text style={{ marginLeft: 15 }}>{`$${sale_price}`}</Text>
						)}
					</Row>
				</Card>
			</Col>
		</Link>
	);
};

export default SaleProductItem;
