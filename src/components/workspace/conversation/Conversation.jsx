function Conversation() {

  const render = () => {
    return (
      <section className="conversation">
        <div className="conversation__container">
          <div className="conversation__container__contact-message">

          </div>
          <div className="conversation__container__own-message"></div>
        </div>
        <div className="conversation__message-bar">
          <div className="icon-button icon-button__large">
            <span className="material-symbols-sharp">
              attach_file_add
            </span>
          </div>
          <input
            className="conversation__message-bar__input"
            type="text"
            placeholder="Text here yor message"
          />
        </div>
      </section>
    );
  };

  return render();
}

export default Conversation;