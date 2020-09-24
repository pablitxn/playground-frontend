// React
import { FC, useState } from "react";
// AntD
import { Select, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
// Styles
import "./styles.less";

interface IJoin {
	handleSignIn: (data: any) => void;
	chatId: string;
}

const { Option } = Select;

const Join: FC<IJoin> = ({ handleSignIn, chatId }) => {
	const [state, setState] = useState({
		name: "",
		room: "",
		chatId: chatId,
		loading: false
	});

	const handleChange = (event) => {
		const { value, name } = event.target;
		setState({
			...state,
			[name]: value
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setState({ ...state, loading: true });
		setTimeout(() => {
			handleSignIn(state);
		}, 1500);
	};

	const handleRoom = (value) => {
		setState({ ...state, room: value });
	};

	const { name, room, loading } = state;

	return (
		<div className="join">
			<form noValidate autoComplete="off" className="join__form">
				<h1 className="join__header">Join</h1>
				<Input
					size="large"
					placeholder="username"
					className="join__username"
					prefix={<UserOutlined />}
				/>
				<Select
					defaultValue="general"
					onChange={handleRoom}
					className="join__room"
				>
					<Option value="general">General</Option>
					<Option value="javascript">Javascript</Option>
					<Option value="music">Música</Option>
				</Select>
				<Button
					className={"join__submit"}
					type="primary"
					onClick={handleSubmit}
					loading={loading}
				>
					Sign In
				</Button>
			</form>
		</div>
	);
};

export default Join;
