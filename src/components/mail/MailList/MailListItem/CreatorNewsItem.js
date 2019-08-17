import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import labels from "app/routes/mail/data/labels";

const CreatorNewsItem = ({
  mail,
  onMailSelect,
  onMailChecked,
  onStartSelect
}) => {
  return (
    <div className="module-list-item mail-cell">
      <Checkbox
        color="primary"
        checked={mail.selected}
        onClick={event => {
          event.stopPropagation();
          onMailChecked(mail);
        }}
        value="SelectMail"
      />
      <IconButton
        type="button"
        className="icon-btn size-50 p-0"
        onClick={() => {
          onStartSelect(mail);
        }}
      >
        {mail.starred ? (
          <i className="zmdi zmdi-star" />
        ) : (
          <i className="zmdi zmdi-star-outline" />
        )}
      </IconButton>

      <div
        className="module-list-info"
        onClick={() => {
          onMailSelect(mail);
        }}
      >
        <div className="module-list-content">
          <div className="mail-user-info">
            <span
              className="d-inline-block text-truncate text-dark"
              style={{ maxWidth: "calc(100% - 220px)" }}
            >
              {mail.subject}
            </span>

            {mail.hasAttachments && <i className="zmdi zmdi-attachment" />}

            <div className="time">{mail.time}</div>
          </div>

          <div className="message mb-2">
            <p> {mail.message}</p>
          </div>
          <div className="labels">
            {labels.map((label, index) => {
              return (
                mail.labels.includes(label.id) && (
                  <div
                    key={index}
                    className={`badge text-white bg-${label.color}`}
                  >
                    {label.title}
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorNewsItem;
