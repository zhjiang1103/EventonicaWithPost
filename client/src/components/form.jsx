
import { useRef } from "react";

const FormEvent = (props) => {

    //const [ event, setEvent ] = useState({title: "", location: "", eventtime: ""})
    const userTitle = useRef();
    const userLocation = useRef();
    const userCategory = useRef();
    const userDate = useRef();
    const userFavourite = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        const userEvent = {title: userTitle.current?.value, category: userCategory.current?.value, location: userLocation.current?.value, eventtime: userDate.current?.value, favourite: userFavourite.current?.value}
        console.log("Inside the component", userEvent);
        props.submit(userEvent);
       
    }

    return(
        <form  onSubmit={handleSubmit}>
            <h2> Please register your next Event in our community</h2>

            <label>Event Title</label>
            <input type="text" name="title" required placeholder="Title of your Event" ref={userTitle}/>
            <br />
            
            <label>Event Category</label>
            <input type="text" name="category" required placeholder="Category of your Event" ref={userCategory}/>
            <br />
            
            <label>Event Location</label>
            <input type="text" name="location" required placeholder="Where will be your event" ref={userLocation}/>
            <br />
            
            <label>Event Date</label>
            <input type="text" name="date" required placeholder="Date of your Event" ref={userDate}/>
            <br />
            
            <label>Favourite Event?</label>
            <input type="text" name="favourite" required placeholder="Please enter true or false" ref={userFavourite}/>
            <br />
            
            <button type="submit">Submit</button>
        </form>

        
    )
}

export default FormEvent;