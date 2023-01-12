import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">
            Meetup Title
            <input type="text" required id="title" />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">
            Meetup Image
            <input type="url" required id="image" />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">
            Address
            <input type="text" required id="address" />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">
            Description
            <textarea required id="description" rows="5"></textarea>
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
