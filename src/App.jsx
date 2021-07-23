import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledLabel = styled.label`
	&[for=${props => props.label_name}] {
		background-image: url(${props => props.path});
	}
`;

const Input = styled.input`
	&:nth-of-type(${prop => prop.num + 1}):checked ~ label:nth-of-type(${prop => prop.num + 1}) { 
	   z-index: 0;
	}
	&:nth-of-type(${prop => prop.num + 1}):checked ~ label {
		transform: translate3d(-${prop => prop.shift}%, 0, 0);
	}
`;

const CarouselCore = ({paths}) => {
	return (<form>
		{paths ? paths.map((path, index) => <Input key={index} name={"image"} type={"radio"} value={`image${index}`} id={`image${index}`} num={index} shift={100 * index}/>) : ''}
		{paths ? paths.map((path, index) => {
			return <StyledLabel path={path} key={index} for={`image${index}`} label_name={`image${index}`}/>
		}) : ''}
	</form>);
}

const App = () => {
	const arr = [ "assets/boat.jpg", "assets/fuji.jpg", "assets/bilbs.jpg", "assets/rocks.jpg", "assets/valley.jpg" ];
	return (<div className="container-box">
		<div className={'container'}>
			<CarouselCore paths={arr}/>
		</div>
	</div>);
}

ReactDOM.render(<App/>, document.getElementById('root'));