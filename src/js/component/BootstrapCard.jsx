import React from "react";

const BootstrapCard = (props) => {
    return (

		<div className="card m-5">
			<img className="card-img-top" src="rigo-baby.jpg" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					My name is what, my name is who, my name is what, my name is who, my name is what...
				</p>
				<a href="https://en.wikipedia.org/wiki/Bob_Dylan" class="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
}

/* BootstrapCard.propTypes = {
title: PropType.string,

};

ReactDOM.render(
	<BootstrapCard
	title={'The Name Game'}
	/>
) */
export {BootstrapCard};