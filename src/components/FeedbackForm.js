import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function FeedbackForm() {
  const emailInput = useRef();
  const nameInput = useRef();
  const feedbackInput = useRef();
  const Navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form submitted");
    const email = emailInput.current.value;
    const name = nameInput.current.value;
    const feedback = feedbackInput.current.value;
    const feedbackData = {
      email,
      name,
      feedback,
    };
    console.log(feedbackData);
    fetch(
      "https://qualityms-204e6-default-rtdb.firebaseio.com/feedbacks.json",
      {
        method: "post",
        body: JSON.stringify(feedbackData),
      }
    ).then(() => {
      Navigate("/");
    });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-3">
            <label
              for="exampleFormControlInput1"
              className="form-label text-primary mt-3"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control border border-2 border-info"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              ref={emailInput}
            />
          </div>
          <div className="mb-3">
            <label
              for="exampleFormControlTextarea1"
              className="form-label text-primary"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control border border-2 border-info"
              id="exampleFormControlTextarea1"
              placeholder="Enter your name"
              ref={nameInput}
            />
            <label className="mt-2 form-label text-primary">
              Enter your feedback
            </label>
            <input
              type="text"
              className="form-control border border-2 border-info"
              id="feedback"
              placeholder="Write few lines on purchased product"
              ref={feedbackInput}
            ></input>

            <button
              className="rounded-pill mt-3 btn btn-primary"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeedbackForm;
