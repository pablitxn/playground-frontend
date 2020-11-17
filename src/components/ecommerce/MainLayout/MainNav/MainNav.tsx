// React
import { FC } from "react";
// AntD
import { Layout, Row, Col, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
// Router
import Link from "next/link";
// Styles
import "./MainNav.less";

const { Header } = Layout;

const MainNav: FC = () => {
	// const { totalItems } = useCartSelector();
	const totalItems = [{ id: "", price: "200", count: 200 }];

	return (
		<Header className="main-nav">
			<Row justify="space-between">
				<Col span={2}>
					<div className="left-nav-items">
						<Link href="/ecommerce">
							<a>Inicio</a>
						</Link>
					</div>
				</Col>
				<Col span={2} style={{ textAlign: "right" }}>
					<Link href="/ecommerce/cart">
						<div>
							<Badge
								count={<span className="count-badget">2</span>}
								className="cart-badget"
							>
								<ShoppingCartOutlined className="cart-icon" />
							</Badge>
						</div>
					</Link>
				</Col>
			</Row>
		</Header>
	);
};

export default MainNav;
