// Types
import { FC } from "react";
// Styles
import "./footer.styles.less";

interface IFooter {
	className: string;
	cases: number;
}

const Footer: FC<IFooter> = ({ className, cases = 188 }) => {
	return (
		<div className={`footer ${className}`}>
			<div className="footer__brief-info brief-info">
				<span className="brief-info__cases">{cases}</span>
				<h3 className="brief-info__description">Paises y regiones afectadas</h3>
			</div>
			<span className="footer__content">
				El Justicialismo ha dejado de ser la causa de un hombre para ser la
				causa del pueblo, y por ella sí valdría la pena darlo todo, incluso la
				vida El Justicialismo necesita apóstoles y para ser apóstol hay que
				estar dispuesto a ser héroe, y solamente los fanáticos de amor por una
				causa son capaces de morir por un ideal La verdadera democracia es
				aquella donde el gobierno hace lo que el pueblo quiere y defiende un
				solo interés: el del pueblo El Justicialismo ha dejado de ser la causa
				de un hombre para ser la causa del pueblo, y por ella sí valdría la pena
				darlo todo, incluso la vida. Quien se dedica a la conducción debe ser
				profundamente humanista: el conductor siempre trabaja para los demás,
				jámas para él La única verdad es la realidad Gobernar es fácil, lo
				difícil es conducir
			</span>
		</div>
	);
};

export default Footer;
