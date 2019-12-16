import React from 'react';




function CheckDiv(props)
{
    
const hendleCheck=()=>{
    alert('2')
}
    
	return(
		<>
		<label className={props.checked ? "activeLabel" : ""}><input type="checkbox" checked={props.checked} onChange={hendleCheck} />{props.text}</label><br />
		</>
		)
}

export default CheckDiv;