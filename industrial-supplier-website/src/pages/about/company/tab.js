const CompanyInfoTab = ({ subtitle }) => {
	return (
		<section className="company-info-tab">
			<div className="company-logo">
				<h1>Dustrilox</h1>
			</div>
			<p>{subtitle}</p>
		</section>
	);
};

export default CompanyInfoTab