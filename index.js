const Notification = (props) => {
  //  Write your code here.
  const { name, image_link, classValue, logo_item, para_item } = props;
  return (
    <div className={classValue}>
      <img src={image_link} className={logo_item} />
      <p className={para_item}>{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="card-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      name="Information Message"
      image_link="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      classValue="info"
      logo_item="logo"
      para_item="para"
    />
    <Notification
      name="Success Message"
      image_link="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      classValue="success"
      logo_item="logo"
      para_item="para"
    />
    <Notification
      name="Warning Message"
      image_link="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      classValue="warning"
      logo_item="logo"
      para_item="para"
    />
    <Notification
      name="Error Message"
      image_link="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      classValue="error"
      logo_item="logo"
      para_item="para"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
