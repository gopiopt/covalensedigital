import React, {useState} from "react";
import Image from 'next/image';
import Link from "next/link";

export const SelectRatings = () => {
  const ratingsList = [1,2,3,4,5];
  const [selectedRating, setSelectedRating] = useState(0);
  const handleOnselect = (e)=>{
    setSelectedRating(e.currentTarget.value);
  }
  return (
    <div className="flowCard">
      <div className="selectRatingWrap">
        <div className="starwrapper">
          <Image src='/icon-star.svg' width="15px" height="15px"/>
        </div>
        <div className="inforTextWrap">
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offerings!</p>
        </div>
        <div className="ratingList">
         {ratingsList.map((rate)=>{
           return <span className="ratingWapper" key={rate}>
             <input type="radio" value={rate} name="rate" className="radioButton" onClick={(rate)=>{handleOnselect(rate)}}/>
             <span className="rate">{rate}</span>
           </span>
         })}
        </div>
        <Link href={selectedRating > 0 ? `/showratings?id=${selectedRating}`:'/'}><button className="rateSubmitBtn">submit</button></Link>
      </div>
    </div>
  );
};
