import React, {Component} from 'react';
import CheckDiv from './CheckDiv.js';

function Form() {
  return (
    <div className="firstDiv">
		<h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
		<form>
			<CheckDiv className="check" text="Все" checked={false} />
			<CheckDiv text="Без пересадок" checked={true} />
			<CheckDiv text="1 пересадка" checked={true} />
			<CheckDiv text="2 пересадки" checked={true} />
			<CheckDiv text="3 пересадки" checked={false} />
		</form>
	</div>
  );
}

export default Form;

