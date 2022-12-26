import React from "react";
import DatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";
import { getYear, getMonth } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import range from "lodash/range";
import { Label } from "reactstrap";

const ApplicationDatePicker = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  const years = range(1990, getYear(new Date()) + 50, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h6 for={props.name}>{props.label}</h6>{" "}
        </div>
        <div className="col-6">
          <DatePicker
            {...field}
            {...props}
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div
                style={{
                  margin: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span
                  className="arrow-icon arrow-left"
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  {"<"}
                </span>
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <span
                  className="arrow-icon arrow-right"
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  {">"}
                </span>
              </div>
            )}
            selected={(field.value && new Date(field.value)) || null}
            onChange={(val) => {
              if (field.name === "activation_date") {
                setFieldValue("end_date", "");
              }
              setFieldValue(field.name, val);
            }}
            className={`form-control ${props.customClassName}`}
            disabled={props.isDisabled}
            onKeyDown={(e) => {
              e.preventDefault();
            }}
          />
        </div>
      </div>
    </>
  );
};
export default ApplicationDatePicker;
