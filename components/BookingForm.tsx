"use client";

import React, { FormEvent, useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import useDynamicInput from "@/hooks/useDynamicInput";
import validator from "@/utils/validator";
import { client } from "@/sanity/lib/client";
import backgroundImage from "@/public/images/bg.jpg";
import LoadingAnimation from "./UI/Loader";

type PropTypes = {
  user_id: string | undefined;
  trip_id: string | undefined;
  trips: { id: string; name: string }[];
};

const BookingForm = ({ user_id, trip_id="", trips }: PropTypes) => {
  // state to control the form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // full name input controller
  const {
    value: fullName,
    errorMsg: fullNameError,
    isTouched: fullNameTouch,
    inputBlurHandler: fullNameTouchHandler,
    valueChangeHandler: fullNameChangeHandler,
    setValue: setFullName,
    reset: resetFullName,
  } = useDynamicInput((value: string) => {
    return validator.isLength(value, 3, 100, "Full Name");
  }, "");

  // nationality input controller
  const {
    value: nationality,
    errorMsg: nationalityError,
    isTouched: nationalityTouch,
    inputBlurHandler: nationalityTouchHandler,
    valueChangeHandler: nationalityChangeHandler,
    setValue: setNationality,
    reset: resetNationality,
  } = useDynamicInput((value: string) => {
    return validator.isLength(value, 2, 100, "Nationality");
  }, "");

  // address input controller
  const {
    value: address,
    errorMsg: addressError,
    isTouched: addressTouch,
    inputBlurHandler: addressTouchHandler,
    valueChangeHandler: addressChangeHandler,
    setValue: setAddress,
    reset: resetAddress,
  } = useDynamicInput((value: string) => {
    return validator.isLength(value, 5, 100, "address");
  }, "");

  // your hight input controller
  const {
    value: yourHight,
    errorMsg: yourHightError,
    isTouched: yourHightTouch,
    inputBlurHandler: yourHightTouchHandler,
    valueChangeHandler: yourHightChangeHandler,
    setValue: setYourHight,
    reset: resetYourHight,
  } = useDynamicInput((value: string) => {
    return validator.isLength(value, 2, 100, "Your Hight");
  }, "");

  // phone number input controller
  const {
    value: phoneNumber,
    errorMsg: phoneNumberError,
    isTouched: phoneNumberTouch,
    inputBlurHandler: phoneNumberTouchHandler,
    valueChangeHandler: phoneNumberChangeHandler,
    setValue: setPhoneNumber,
    reset: resetPhoneNumber,
  } = useDynamicInput((value: string) => {
    return validator.isPhoneNumber(value, "Phone number");
  }, "");

  // emergency contact input controller
  const {
    value: emergencyContact,
    errorMsg: emergencyContactError,
    isTouched: emergencyContactTouch,
    inputBlurHandler: emergencyContactTouchHandler,
    valueChangeHandler: emergencyContactChangeHandler,
    setValue: setEmergencyContact,
    reset: resetEmergencyContact,
  } = useDynamicInput((value: string) => {
    return validator.isPhoneNumber(value, "Emergency contact");
  }, "");

  // email input controller
  const {
    value: email,
    errorMsg: emailError,
    isTouched: emailTouch,
    inputBlurHandler: emailTouchHandler,
    valueChangeHandler: emailChangeHandler,
    setValue: setEmail,
    reset: resetEmail,
  } = useDynamicInput((value: string) => {
    return validator.isEmail(value, "Email");
  }, "");

  // selected trip input controller
  const {
    value: selectedTrip,
    errorMsg: selectedTripError,
    isTouched: selectedTripTouch,
    inputBlurHandler: selectedTripTouchHandler,
    valueChangeHandler: selectedTripChangeHandler,
    setValue: setSelectedTrip,
    reset: resetSelectedTrip,
  } = useDynamicInput<string>((value: string) => {
    return validator.isRequired(value, "Selected trip");
  }, trip_id);

  // Start Date input controller
  const {
    value: startDate,
    errorMsg: startDateError,
    isTouched: startDateTouch,
    inputBlurHandler: startDateTouchHandler,
    valueChangeHandler: startDateChangeHandler,
    setValue: setStartDate,
    reset: resetStartDate,
  } = useDynamicInput((value: string) => {
    return validator.isLength(value, 2, 100, "Start Date");
  }, "");

  // trip duration input controller
  const {
    value: tripDuration,
    errorMsg: tripDurationError,
    isTouched: tripDurationTouch,
    inputBlurHandler: tripDurationTouchHandler,
    valueChangeHandler: tripDurationChangeHandler,
    setValue: setTripDuration,
    reset: resetTripDuration,
  } = useDynamicInput<number >((value: number ) => {
    return validator.isGreaterThanZero(value, "Trip Duration");
  }, 1);

  // total person input controller
  const {
    value: numberOfPeople,
    errorMsg: numberOfPeopleError,
    isTouched: numberOfPeopleTouch,
    inputBlurHandler: numberOfPeopleTouchHandler,
    valueChangeHandler: numberOfPeopleChangeHandler,
    setValue: setNumberOfPeople,
    reset: resetNumberOfPeople,
  } = useDynamicInput<number>((value: number) => {
    return validator.isGreaterThanZero(value, "Number of People");
  }, 1);

  // medical condition input controller
  const {
    value: medicalCondition,
    errorMsg: medicalConditionError,
    isTouched: medicalConditionTouch,
    inputBlurHandler: medicalConditionTouchHandler,
    valueChangeHandler: medicalConditionChangeHandler,
    setValue: setMedicalCondition,
    reset: resetMedicalCondition,
  } = useDynamicInput((value: string) => {
    return validator.isLength(value, 0, 500, "Medical condition");
  }, "");

  // additional information input controller
  const {
    value: additionalInformation,
    errorMsg: additionalInformationError,
    isTouched: additionalInformationTouch,
    inputBlurHandler: additionalInformationTouchHandler,
    valueChangeHandler: additionalInformationChangeHandler,
    setValue: setAdditionalInformation,
    reset: resetAdditionalInformation,
  } = useDynamicInput((value: string) => {
    return validator.isLength(value, 0, 500, "Additional information");
  }, "");

  // utility methods to control the form submission
  const router = useRouter();
  const resetForm = useCallback(() => {
    resetFullName();
    resetNationality();
    resetAddress();
    resetYourHight();
    resetPhoneNumber();
    resetEmergencyContact();
    resetEmail();
    resetSelectedTrip();
    resetStartDate();
    resetTripDuration();
    resetNumberOfPeople();
    resetMedicalCondition();
    resetAdditionalInformation();
  }, [
    resetFullName,
    resetNationality,
    resetAddress,
    resetYourHight,
    resetPhoneNumber,
    resetEmergencyContact,
    resetEmail,
    resetSelectedTrip,
    resetStartDate,
    resetTripDuration,
    resetNumberOfPeople,
    resetMedicalCondition,
    resetAdditionalInformation,
  ]);

  // check if the form is valid
  let formIsValid = false;
  if (
    !fullNameError &&
    !nationalityError &&
    !addressError &&
    !yourHightError &&
    !phoneNumberError &&
    !emergencyContactError &&
    !emailError &&
    !selectedTripError &&
    !startDateError &&
    !tripDurationError &&
    !numberOfPeopleError &&
    !medicalConditionError &&
    !additionalInformationError
  ) {
    formIsValid = true;
  }


  // form submission handler
  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    // check if the user is logged in
    if (!user_id) {
      setSubmitError("You need to login first");
      router.push(
        `/login?callback=/booking${trip_id ? `?trip_id=${trip_id}` : ""}}`
        );
        return;
      }
      
      // check if the form is valid
      if (!formIsValid) {
        console.log("form is not valid", fullNameError, nationalityError, addressError, yourHightError, phoneNumberError, emergencyContactError, emailError, selectedTripError, startDateError, tripDurationError, numberOfPeopleError, medicalConditionError, additionalInformationError)
      setSubmitError("You need to fill all the fields");
      fullNameTouchHandler();
      nationalityTouchHandler();
      addressTouchHandler();
      yourHightTouchHandler();
      phoneNumberTouchHandler();
      emergencyContactTouchHandler();
      emailTouchHandler();
      selectedTripTouchHandler();
      startDateTouchHandler();
      tripDurationTouchHandler();
      numberOfPeopleTouchHandler();
      medicalConditionTouchHandler();
      additionalInformationTouchHandler();
      return;
    }

    // I want to use sanity to store the data
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      // sanity api call
      await client.create({
        _type: "booking",
        fullName,
        nationality,
        address,
        yourHight,
        phone: phoneNumber,
        emergencyContact,
        email,
        startDate,
        tripDuration: Number(tripDuration),
        numberOfPeople: Number(numberOfPeople),
        medicalCondition,
        additionalInformation,
        tour: {
          _type: "reference",
          _ref: selectedTrip,
        },

        user: {
          _type: "reference",
          _ref: user_id,
        },
      });

      setSubmitSuccess(true);
      router.push("/dashboard");
    } catch (error: any) {
      const errMsg =
        error.message ||
        "Something went wrong. Make sure you are connected to the internet";

      setSubmitError(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const bgImageStyle = useMemo(() => {
    return {
      backgroundImage: `url(${backgroundImage.src})`, // Use backgroundImage.src to get the image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      maxHeight: "100vh", // Adjust height as needed
    };
  }, [backgroundImage]);

  const inputGroupCls = "flex flex-col bg-transparent flex-1 gap-1";
  const inputCls =
    "appearance-none block w-full bg-transparent border border-slate-800 border-opacity-10 focus:outline-none shadow-md text-white rounded py-3 px-4 mb-3 placeholder-gray-100 ::placeholder";
  const errorBorderCls = "border-red-500 border-opacity-30";
  const errorCls = "text-red-500 text-sm px-2";


  const tripOptions = useMemo(() => {
    return trips.map((trip) => {
      return (
        <option className='bg-slate-800  hover:bg-transparent' value={trip.id} key={trip.id}>{trip.name}</option>
      );
    });
  }, [trips])

  if (isSubmitting) {
    return <LoadingAnimation />;
  }

  return (
    <div
      className="bg-cover bg-center h-screen overflow-y-scroll flex flex-col items-center"
      style={bgImageStyle}
    >
      <form
        onSubmit={submitHandler}
        className="bg-white/20 backdrop-blur-[5px] w-full md:w-[80%] max-w-full mt-20"
      >
        <div className="bg-gradient-to-b w-full to-transparent  shadow-md">
          <h1 className="text-center my-2 text-white text-3xl font-bold py-2 tracking-wider">
            Booking Form
          </h1>
        </div>
        
        {submitError && <p className="text-red-500 my-2 text-lg text-center p-2">{submitError}</p>}

        {/* Form input container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-4">
          <div className={inputGroupCls}>
            <input
              className={`${inputCls} ${fullNameTouch && fullNameError && errorBorderCls}`}
              type="text"
              placeholder="Full Name"
              value={fullName as string}
              onChange={fullNameChangeHandler}
              onBlur={fullNameTouchHandler}
            />
            {fullNameTouch && <p className={errorCls}>{fullNameError}</p>}
          </div>

          <div className={inputGroupCls}>
            <input
              className={`${inputCls} ${nationalityTouch && nationalityError && errorBorderCls}`}
              type="text"
              placeholder="Nationality"
              value={nationality as string}
              onChange={nationalityChangeHandler}
              onBlur={nationalityTouchHandler}
            />
            {nationalityTouch && <p className={errorCls}>{nationalityError}</p>}
          </div>

          <div className={inputGroupCls}>
            <input
              className={`${inputCls} ${addressTouch && addressError && errorBorderCls}`}
              type="text"
              placeholder="Address"
              value={address as string}
              onChange={addressChangeHandler}
              onBlur={addressTouchHandler}
            />
            {addressTouch && <p className={errorCls}>{addressError}</p>}
          </div>

          <div className={inputGroupCls}>
            <input
              className={`${inputCls} ${yourHightTouch && yourHightError && errorBorderCls}`}
              type="text"
              placeholder="Your Hight"
              value={yourHight as string}
              onChange={yourHightChangeHandler}
              onBlur={yourHightTouchHandler}
            />
            {yourHightTouch && <p className={errorCls}>{yourHightError}</p>}
          </div>

          <div className={inputGroupCls}>
            <input
              className={`${inputCls} ${phoneNumberTouch && phoneNumberError && errorBorderCls}`}
              type="text"
              placeholder="Phone Number"
              value={phoneNumber as string}
              onChange={phoneNumberChangeHandler}
              onBlur={phoneNumberTouchHandler}
            />
            {phoneNumberTouch && <p className={errorCls}>{phoneNumberError}</p>}
          </div>

          <div className={inputGroupCls}>
            <input
              className={`${inputCls} ${emergencyContactTouch && emergencyContactError && errorBorderCls}`}
              type="text"
              placeholder="Emergency Contact"
              value={emergencyContact as string}
              onChange={emergencyContactChangeHandler}
              onBlur={emergencyContactTouchHandler}
            />
            {emergencyContactTouch && (
              <p className={errorCls}>{emergencyContactError}</p>
            )}
          </div>

          <div className={inputGroupCls}>
            <input
              className={`${inputCls} ${emailTouch && emailError && errorBorderCls}`}
              type="email"
              placeholder="Email"
              value={email as string}
              onChange={emailChangeHandler}
              onBlur={emailTouchHandler}
            />
            {emailTouch && <p className={errorCls}>{emailError}</p>}
          </div>

          <div className={inputGroupCls}>
            <select
              className={`${inputCls} ${selectedTripTouch && selectedTripError && errorBorderCls}`}
              value={selectedTrip !== "" ? selectedTrip as string : trips[0].id}
              onChange={(event: FormEvent<HTMLSelectElement>) =>
                setSelectedTrip(event.currentTarget.value)
              }
            >
              {tripOptions}
            </select>
            {selectedTripTouch && (
              <p className={errorCls}>{selectedTripError}</p>
            )}
          </div>

          <div className={inputGroupCls}>
            <label className="text-white">Start Date</label>
            <input
              className={`${inputCls} ${startDateTouch && startDateError && errorBorderCls}`}
              type="date"
              placeholder="Start Date"
              value={startDate as string}
              onChange={startDateChangeHandler}
              onBlur={startDateTouchHandler}
            />
            {startDateTouch && <p className={errorCls}>{startDateError}</p>}
          </div>

          <div className={inputGroupCls}>
            <label className="text-white">Trip Duration</label>
            <input
              className={`${inputCls} ${tripDurationTouch && tripDurationError && errorBorderCls}`}
              type="number"
              placeholder="Trip Duration"
              value={tripDuration as number}
              onChange={tripDurationChangeHandler}
              onBlur={tripDurationTouchHandler}
            />
            {tripDurationTouch && (
              <p className={errorCls}>{tripDurationError}</p>
            )}
          </div>

        <div className={`${inputGroupCls} col-span-full`}>
          <div className="w-full md:w-fit mx-auto">
          <label className="text-white">Number of People</label>
            <input
              className={`${inputCls} ${numberOfPeopleTouch && numberOfPeopleError && errorBorderCls}`}
              type="number"
              placeholder="Number of People"
              value={numberOfPeople as number}
              onChange={numberOfPeopleChangeHandler}
              onBlur={numberOfPeopleTouchHandler}
            />
            {numberOfPeopleTouch && (
              <p className={errorCls}>{numberOfPeopleError}</p>
            )}
            </div>
          </div>

          <div className={inputGroupCls}>
            <textarea
              className={`${inputCls} ${medicalConditionTouch && medicalConditionError && errorBorderCls}`}
              placeholder="Medical Condition"
              value={medicalCondition as string}
              onChange={medicalConditionChangeHandler}
              onBlur={medicalConditionTouchHandler}
            />
            {medicalConditionTouch && (
              <p className={errorCls}>{medicalConditionError}</p>
            )}
          </div>

          <div className={inputGroupCls}>
            <textarea
              className={`${inputCls} ${additionalInformationTouch && additionalInformationError && errorBorderCls}`}
              placeholder="Additional Information"
              value={additionalInformation as string}
              onChange={additionalInformationChangeHandler}
              onBlur={additionalInformationTouchHandler}
            />
            {additionalInformationTouch && (
              <p className={errorCls}>{additionalInformationError}</p>
            )}
          </div>
        </div>

        <button type="submit" className="block w-fit mx-auto bg-white/20 shadow-lg py-3 px-6 text-white mb-8 hover:bg-white/50 active:bg-white/10 text-lg font-bold tracking-wider rounded">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
