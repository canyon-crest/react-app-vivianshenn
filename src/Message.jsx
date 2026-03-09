function Message(props) {
  return (
    <div>
      <h2>{props.message}</h2>
      <p>From: {props.name}</p>
    </div>
  );
}

export default Message;
