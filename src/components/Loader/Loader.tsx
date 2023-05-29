import React from 'react';

interface LoaderProps {
	text: string;
}

const Loader = (props: LoaderProps) => {
	return (
		<div>
			<p> {props.text}</p>
		</div>
	);
};
export default Loader;
