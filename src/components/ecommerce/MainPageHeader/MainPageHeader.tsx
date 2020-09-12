// React
import { FC, useCallback } from "react";
// AntD
import { PageHeader } from "antd";
// Router
import { useRouter } from "next/router";
// Styles
import "./MainPageHeader.less";

interface IMainPageHeader {
	title: string;
	subTitle?: string;
}

const MainPageHeader: FC<IMainPageHeader> = ({ title, subTitle = "" }) => {
	const router = useRouter();
	const goBack = useCallback(() => {
		router.back();
	}, []);

	return (
		<PageHeader
			className="site-page-header boxed-width"
			onBack={goBack}
			title={title}
			subTitle={subTitle}
		/>
	);
};

export default MainPageHeader;
