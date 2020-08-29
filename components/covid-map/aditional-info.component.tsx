// Types
import { FC } from "react";

interface IAditionalInfo {
	confirmed: string;
	deaths: string;
	recovered: string;
	provincestate: string;
	countryregion: string;
}

const AditionalInfo: FC<IAditionalInfo> = ({
	confirmed,
	deaths,
	recovered,
	provincestate,
	countryregion
}) => {
	return (
		<div>
			<p>
				<strong>
					${provincestate} - ${countryregion}
				</strong>
			</p>
			<p> confirmados: ${confirmed} </p>
			<p> muertes: ${deaths} </p>
			<p> recuperados: ${recovered} </p>
		</div>
	);
};

export default AditionalInfo;
