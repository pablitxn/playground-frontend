import * as React from "react";

function SvgComponent(props) {
	return (
		<svg width={8} height={8} viewBox="0 0 6 6" color="green" {...props} />
	);
}

export default SvgComponent;
