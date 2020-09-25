// React
import { FC, useState } from "react";
// Types
import { IHandleSignIn } from "interfaces/coffee-chat";
// AntD
import { Select, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
// Styles
import "./styles.less";

interface IJoin {
	handleSignIn: IHandleSignIn;
	chatId: "user-a" | "user-b";
}

const { Option } = Select;

const Join: FC<IJoin> = ({ handleSignIn, chatId }) => {
	const [state, setState] = useState({
		name: "",
		room: "general",
		loading: false
	});

	const handleUser = (event) => {
		const { value } = event.target;
		setState({ ...state, name: value });
	};

	const handleRoom = (event) => {
		const { value } = event.target;
		setState({ ...state, room: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setState({ ...state, loading: true });
		setTimeout(() => {
			handleSignIn({ name, room, chatId });
		}, 1500);
	};

	const { name, room, loading } = state;

	return (
		<div className="join">
			<form noValidate autoComplete="off" className="join__form">
				<h1 className="join__header">Join</h1>
				<Input
					size="large"
					placeholder="username"
					value={name}
					onChange={handleUser}
					className="join__username"
					prefix={<UserOutlined />}
				/>
				<Select
					defaultValue="general"
					onChange={handleRoom}
					className="join__room"
				>
					<Option value="general">General</Option>
					<Option value="music">Music</Option>
					<Option value="javascript">Javascript</Option>
				</Select>
				<Button
					className={"join__submit"}
					type="primary"
					htmlType="submit"
					onClick={handleSubmit}
					loading={loading}
					disabled={name === "" ?? false}
				>
					Sign In
				</Button>
			</form>
		</div>
	);
};

export default Join;
