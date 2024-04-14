// /**
//  *
//  * This hook is used to control the submit button by disabling it 
//  * if all required fields are yet to be filled,  
//  * this way we prevent the api from been called unnecessarily
//  *
//  */
// import { Form, FormInstance } from "antd";
// import { useEffect, useState } from "react";

// interface SubmitButton {
//   form: FormInstance;
// }

// interface SubmittableResult {
//   submittable: boolean;
// }

// const useSubmittable = ({ form }: SubmitButton): SubmittableResult => {
//   const [submittable, setSubmittable] = useState<boolean>(false);

//   // Watch all values
//   const values = Form.useWatch([], form);

//   useEffect(() => {
//     form
//       .validateFields({ validateOnly: true })
//       .then(() => setSubmittable(true))
//       .catch(() => setSubmittable(false));
//   }, [form, values]);

//   return {
//     submittable,
//   };
// };

// export default useSubmittable;