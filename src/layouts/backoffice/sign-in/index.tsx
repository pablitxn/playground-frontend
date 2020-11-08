// React
import { FC } from "react";
// AntD
import { Typography, Form, Input, Button, Checkbox } from "antd";
// Styles
import "./styles.less";

interface ISignInLayout {
	handleSignIn: () => void;
}

const { Title } = Typography;

const SignInLayout: FC<ISignInLayout> = ({ handleSignIn }) => {
	/** Handlers */
	const handleClick = () => {
		handleSignIn();
	};

	const handleSubmit = (data: any) => {
		console.log(data);
		handleSignIn();
	};

	const handleFailedSubmit = () => {
		console.log("some alert error in sign in");
	};

	return (
		<div className="bff-sign-in">
			<Title>Sign in</Title>
			<Form
				name="sign-in"
				initialValues={{ remember: true }}
				onFinish={handleSignIn}
				onFinishFailed={handleFailedSubmit}
			>
				<Form.Item
					label="Username"
					name="username"
					rules={[{ required: true, message: "Please input your username!" }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: "Please input your password!" }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item name="remember" valuePropName="checked">
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" onClick={handleClick}>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default SignInLayout;
