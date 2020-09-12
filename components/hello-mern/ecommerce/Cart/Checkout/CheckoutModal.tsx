// React
import { FC } from "react";
// Components
import CheckoutList from "./CheckoutList";
// AntD
import { Modal } from "antd";

interface ICheckoutSummary {
	visible: boolean;
	hideModal: () => void;
}

const CheckoutSummary: FC<ICheckoutSummary> = ({ visible, hideModal }) => {
	const cartProducts = [];

	return (
		<Modal
			title="Checkout Summary"
			visible={visible}
			onOk={hideModal}
			onCancel={hideModal}
			closable={false}
			width={750}
		>
			<CheckoutList products={cartProducts} />
		</Modal>
	);
};

export default CheckoutSummary;
