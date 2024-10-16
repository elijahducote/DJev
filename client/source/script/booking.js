import {htm} from "./utility";
import "@hcaptcha/vanilla-hcaptcha";

export function Booking() {
  const captcha = htm(undefined,"h-captcha",{"auto-render":"true","id":"captcha","site-key":"e2480948-c1cc-4f46-ac56-81ea236a50c8","size":"compact","tabindex":"0"}), 
  form = htm([
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
    
    captcha,

    htm(htm("SUBMIT","span"),
        "button",
        {
          type:"submit",
          class:"booking-submit",
          disabled:true
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
  
  captcha.addEventListener("verified", (e) => {
    window.rqid = e.token;
    document.getElementsByClassName("booking-submit")[0].disabled = false;
  });
  captcha.addEventListener("error", (e) => {
    window.rqid = false;
    document.getElementsByClassName("booking-submit")[0].disabled = true;
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (window.rqid) this.submit();
  });
  return form;
}