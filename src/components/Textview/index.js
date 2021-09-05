import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Textview extends Component {
	render() {
		const { text, color, condition, condition_second, output } = this.props

		let variable = text

		if(condition === condition_second){
			variable = output
		}

		return (
			<View style={styles.wrapper}>
				<Text style={{ color }}>{variable}</Text>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default Textview
