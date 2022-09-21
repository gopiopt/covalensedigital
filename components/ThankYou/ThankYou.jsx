import React from "react";
import Image from "next/image";

export const ThankYou = ({rating}) => {
  return (
    <div className="flowCard">
      <div className="thankYouWrap">
        <span>
          <span>
            <Image
              src="/illustration-thank-you.svg"
              width="140px"
              height="90px"
            />
          </span>
        </span>
        <p className="showRatingDetails">{`You selected ${rating} out of 5`}</p>
        <div className="thankyouText">
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch.
          </p>
        </div>
      </div>
    </div>
  );
};
