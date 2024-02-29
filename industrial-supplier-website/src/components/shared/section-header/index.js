import "./index.css"

const SectionHeader = ({name}) => {
	return (
		<div className="section-header">
			<p>{name}</p>
			<div className="line"></div>
		</div>
	);
};

export default SectionHeader