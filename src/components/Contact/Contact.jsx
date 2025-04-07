const Contact = ({ id, name, number }) => {
  return (
    <li>
      <div>
        <div>
          <span>{name}</span>
        </div>
        <div>
          <a href="">{number}</a>
        </div>
      </div>
      <button type="button">Delete</button>
    </li>
  );
};

export default Contact;
