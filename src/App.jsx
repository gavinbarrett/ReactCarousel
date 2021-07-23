import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import BoatImage from './assets/boat.jpg';
import FujiImage from './assets/fuji.jpg';
import RocksImage from './assets/rocks.jpg';
import ValleyImage from './assets/valley.jpg';


/*
const StyledLabel = styled.label`
	&[for=${props => props.label_name}] {
		background-image: url(${props => props.path});
	}
`;
*/
// FIXME: pass in number of image order, pass in percentage amount to shift by (order * -100%: -0%, -100%, -200%, -300%...)
/*
const Input = styled.input`
	&:nth-of-type(${prop => prop.num}):checked ~ label:nth-of-type(${prop => prop.num}) { 
	   z-index: 0;
	}
	&:nth-of-type(${prop => prop.num}):checked ~ label {
		transform: translate3d(${prop => prop.shift}%, 0, 0);
	}
`;
*/

/*
const Input = styled.input`
	&:nth-of-type(${prop => prop.num}):checked ~ label:nth-of-type(${prop => prop.num}) { 
	   z-index: 0;
	}
	&:nth-of-type(${prop => prop.num}):checked ~ label {
		transform: translate3d(-100%, 0, 0);
	}
`;
*/

const CarouselCore = ({paths}) => {
	return (<form>
		{paths ? paths.map((path, index) => <input key={index} type={"radio"} /*num={index} shift={(index * -100)}*/ value={`image${index}`} id={`image${index}`}/>) : ''}
		{paths ? paths.map((path, index) => {
			return <label path={path} key={index} for={`image${index}`}/*label_name={`image${index}`} htmlFor={`image${index}`}*//>
		}) : ''}
	</form>);
}

const App = () => {
	const arr = [ "assets/boat.jpg", "assets/fuji.jpg", "assets/rocks.jpg", "assets/valley.jpg" ];
	return (<div className={'container'}>
		<CarouselCore paths={arr}/>
	</div>);
}

ReactDOM.render(<App/>, document.getElementById('root'));