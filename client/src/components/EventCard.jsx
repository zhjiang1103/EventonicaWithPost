import Card from 'react-bootstrap/Card';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import moment from 'moment';
import Heart from 'react-animated-heart';
import { useState } from 'react';
import { useReducer } from 'react';




const EventCard = (props) => {

  // Define a reducer function
  const favouriteReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_FAVORITE':
        return { ...state, favourite: !state.favourite }; // Toggle the favorite value
      default:
        return state;
    }
  };

    const [isFavourite, setIsFavourite]=useState('false');
    // Initialize the state with the favorite property
    const [state, dispatch] = useReducer(favouriteReducer, { favourite: false });

    // Handle the click event to toggle the favorite value
    const handleToggleFavourite = () => {
      dispatch({ type: 'TOGGLE_FAVORITE' });
      setIsFavourite(state.favourite);
      const idToUpdate = props.event.id;
      let updatedFavourite = {"favourite":isFavourite};
      console.log("State: line 31", state);
      props.onFavourite(idToUpdate,updatedFavourite)
    };
  
    
    
    const handleDelete = () => {
      //localhost:8080/api/events/5
      const idToDelete = props.event.id;
      confirmAlert({
        title: 'Confirm to Delete Event',
        message: `Are you sure to delete this event: ${props.event.title}?`,
        buttons: [
          {
            label: 'Yes',
            onClick: () => props.onDelete(idToDelete)
          },
          {
            label: 'No',
            onClick: () => console.log('Click No')
          },
          {
            label: 'Maybe?',
            onClick: () => console.log('Click Maybe')
          }
        ]
      });
    }
   
   
    



    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.event.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Date: {!props.event.eventtime ? "TBD" : moment(props.event.eventtime).format('MMMM Do, YYYY')}</Card.Subtitle>
          <Card.Text>
            <div>Category: {props.event.category}</div>
            <div>Location: {props.event.location}</div>
          </Card.Text>
          <button onClick={handleDelete}>Delete</button>
          <Heart  isClick={isFavourite} onClick={handleToggleFavourite} >Favourite</Heart>
         

        </Card.Body>
      </Card>
    )
  }


  export default EventCard;