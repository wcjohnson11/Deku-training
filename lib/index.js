import element from 'dekujs/virtual-element';
import { Grid, Cell } from 'dominicbarnes/deku-grid';
import { Button, Code, TextField } from 'segmentio/ui';

/**
 * `deku3`.
 */

export default {
	initialState() {
		return { code: '' };
	},
  render({ props, state }, updateState) {
  	let { code } = state;
  	return (
  		 <Grid gutter>
  		  <Cell size="1of1">
  			<Button>Getting Started</Button>
  		  </Cell>
  		  <Cell size="1of2">
  			<TextField onInput={updateCode} multiline />
  		  </Cell>
  		  <Cell size="1of2">
	  		<Code language='javascript'>{code}</Code>
	  	  </Cell>
	  	</Grid>
  	);

  	function updateCode(e) {
  		updateState({ code: e.target.value });
  	}
  }
};
