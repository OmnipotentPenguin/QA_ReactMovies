import React from 'react'
import { Card } from 'react-bootstrap';

export default function Data(props) {
    return (
        <div>
            <Card style={{ width: '18rem', height: '33rem'}} onClick={props.findMovie}>
                <Card.Img style={{ height: '25rem'}} src={props.Poster} alt="Movie Poster"></Card.Img>
                <Card.Body>
                    <Card.Title>`Title: {props.Title}`</Card.Title>
                    <Card.Text>`Year: {props.Year}`</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}