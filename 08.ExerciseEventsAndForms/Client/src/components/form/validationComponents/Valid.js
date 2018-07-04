import React from 'react';

let Valid = prop => {
	return (
		<span
			role="img"
			aria-label="valid"
			style={{
				display: prop.display ? '' : 'none',
        marginLeft: '-30px',
        borderLeft: '1px solid',
				paddingLeft:'3px'
			}}
		>
			✅
		</span>
	);
};

export default Valid;
