import styled from 'styled-components'

const FancyBox = styled.div`
	margin: 2em;
	border: 1px solid darkgray;
    box-shadow: 1em 1em 2em gray;
    transition: 0.5s all linear;

    &:hover {
        box-shadow: 0.5em 0.5em 1.5em gray;
		transform: scale(0.9);
		cursor: pointer;
		/*transform: translateX(0.3em) translateY(0.3em);*/
    }
    &:last-child {
        margin-bottom: 2em;
    }
`


// const Box = () => (
// 	<div>
// 		Box!
// 	</div>
// )

export default FancyBox
