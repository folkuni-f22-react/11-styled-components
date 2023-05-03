import styled from 'styled-components'

const List = styled.ul`
	list-style-type: none;
	background-color: #F6C8EA;
	padding: 0;
	display: flex;
	flex-direction: row;
`

const ListItem = styled.li`
	padding: 0.4em 1.2em;
	border: 1px solid black;
	background-color: ${({ selected }) => selected ? 'lime' : '#F6C8EA'};

	&:hover {
		cursor: pointer;
		background-color: hotpink;
	}
`
// text-decoration: none; <- ta bort underline

// Här börjar ordinarie komponent
const TopMenu = () => (
	<nav>
		<List>
			<ListItem> Menu 1 </ListItem>
			<ListItem selected={true}> Menu 2 </ListItem>
			<ListItem> Menu 3 </ListItem>
		</List>
	</nav>
)

// const f1 = () => (1)
// const f2 = () => { return 1 }

export default TopMenu
