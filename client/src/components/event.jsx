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
    //props.onDelete(idToDelete)

    // const onAttributeEdit = (eventId, attribute, newValue) => {
    //   // Find the event by ID
    //   let idToEdit=props.event.id;
    //   const updatedEvents = props.event.map((event) => {
    //     if ( idToEdit === eventId) {
    //       // Create a new event object with the updated attribute
    //       return {
    //         ...event,
    //         [attribute]: newValue,
    //       };
    //     }
    //     return event;
    //   });

    //   console.log(`Editing ${attribute} for event with ID ${eventId}`);
    // }
    // const EventItem = (props, onAttributeEdit ) => {
    //   const handleEditAttribute = (attribute) => {
    //     const newValue = prompt(`Enter new ${attribute}:`, event[attribute]);

    //     if (newValue !== null) {
    //       // Call the onAttributeEdit function to update the event attribute
    //       onAttributeEdit(event.id, attribute, newValue);
    //     }
    //   };

    // const handleEdit = () => {
    //   const idToEdit = props.event.id;
    //   confirmAlert({
    //     message: `Which information do you want to edit for this event: ${props.event.title}?`,
    //     buttons: [
    //       {
    //         label: 'Title',
    //         onClick: () => handleAttributeEdit(idToEdit, 'title')//props.onTitleEdit(idToEdit)
    //       },
    //       {
    //         label: 'Location',
    //         onClick: () => console.log('Location')//props.onLocationEdit(idToEdit)
    //       },
    //       {
    //         label: 'Event time',
    //         onClick: () => console.log('Time')//props.onTimeEdit(idToEdit)
    //       },
    //     ]
    //   });

    // }


    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.event.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Date: {!props.event.eventtime ? "TBD" : moment(props.event.eventtime).format('MMMM Do, YYYY')}</Card.Subtitle>
          <Card.Text>
            Category: {props.event.category}
            Location: {props.event.location}
          </Card.Text>
          <button onClick={handleDelete}>Delete</button>
          <Heart  isClick={isFavourite} onClick={handleToggleFavourite} >Favourite</Heart>
         

        </Card.Body>
      </Card>
    )
  }


  export default EventCard;