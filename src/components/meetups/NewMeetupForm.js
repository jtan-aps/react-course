import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">
            Meetup Title
            <input type="text" required id="title" ref={titleInputRef} />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">
            Meetup Image
            <input type="url" required id="image" ref={imageInputRef} />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">
            Address
            <input type="text" required id="address" ref={addressInputRef} />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">
            Description
            <textarea
              required
              id="description"
              rows="5"
              ref={descriptionInputRef}
            ></textarea>
          </label>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
