import {htm} from "./utility";

export function Booking() {
  return htm([
    htm("Your Email",
      "label",
      {
        for: "email",
        class: "home-heading"
      }
    ),

    htm(undefined,
      "input",
      {
        type: "email",
        name: "email",
        required: "",
        minlength: "10",
        placeholder: "Username@Website.Ext",
        class: "booking-email-input",
      }
    ),

    htm(undefined,
        "br"
    ),

    htm("Your Message",
      "label",
      {
        for: "message",
        class: "home-heading"
      }
    ),

    htm(undefined,
        "textarea",
        {
          type: "email",
          name: "message",
          required: "",
          minlength: "14",
          maxlength: "2000",
          placeholder: "Say something!",
          class: "booking-message-text",
        }
    ),

    htm(undefined,
        "br"
    ),

    htm(htm("SUBMIT","span"),
        "button",
        {
          type:"submit",
          class:"booking-submit"
        }
    )
    
  ],
    "form",
    {
      action: "/submit",
      method: "POST",
      class: "booking-form"
    }

  );
}