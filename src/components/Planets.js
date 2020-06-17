import React from 'react';
import {Card, Grid} from 'semantic-ui-react'

export default function Planets ({data}){
	console.log("dasdasd",data)
	return (
		<>
		<h1>planets</h1>
			<Grid columns={3}>
				{data.map((planet,i)=>{
					return (
						<Grid.Column key={i}>
							<Card>
								<Card.Content>
									<Card.Header>
										{planet.name}
									</Card.Header>
									<Card.Description>
										<strong>Climate</strong>
										<p>{planet.climate}</p>
										<strong>Population</strong>
										<p>{planet.population}</p>
										<strong>Diameter</strong>
										<p>{planet.diameter}</p>
									</Card.Description>
								</Card.Content>
							</Card>
						</Grid.Column>					)
				})}
			</Grid>
		</>
	)
}