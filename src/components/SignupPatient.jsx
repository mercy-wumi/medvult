import { useState } from "react";
import { useContractRead, useContractWrite } from "wagmi";
import patientAbi from "../patientABI.json";

const SignupPatient = () => {
  const [patientRec, setPatientRec] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    genotype: "",
    symptoms: "",
  });

  const deployedContract = "0xb216000346a6F23CEf7D1eB656319ad1dD7D6FC1";

  const handleChangePatientRec = (e) => {
    const { name, value } = e.target;
    setPatientRec({
      ...patientRec,
      [name]: value,
    });
  };

  // getting all records here
  const {
    data: allrec,
    isError: allError,
    isLoading: readLoading,
  } = useContractRead({
    address: deployedContract,
    abi: patientAbi,
    functionName: "view_all_patient_records",
  });

  // adding basic patient info here
  const {
    data: dataAdd,
    isLoading: addLoading,
    isSuccess: isSuccessAdd,
    write: writeAdd,
  } = useContractWrite({
    address: deployedContract,
    abi: patientAbi,
    functionName: "add_patient",
    args: [patientRec.name, patientRec.age, patientRec.email, patientRec.phone],
  });

  // update patient record here
  const {
    data: updateRec,
    isLoading: updateIsloading,
    isSuccess: updateIsSuccess,
    write: updateWrite,
  } = useContractWrite({
    address: deployedContract,
    abi: patientAbi,
    functionName: "update_patient_record",
    args: [
      patientRec.name,
      patientRec.age,
      ,
      patientRec.phone,
      patientRec.symptoms,
    ],
  });
  console.log(patientRec);
  return (
    <div className="signup">
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={patientRec.name}
          onChange={handleChangePatientRec}
        />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={patientRec.email}
          onChange={handleChangePatientRec}
        />
        <input
          type="number"
          placeholder="Enter your phone number"
          name="phone"
          value={patientRec.phone}
          onChange={handleChangePatientRec}
        />
        <input
          type="number"
          placeholder="Enter your age"
          name="age"
          value={patientRec.age}
          onChange={handleChangePatientRec}
        />
        <select
          onChange={handleChangePatientRec}
          value={patientRec.gender}
          name="gender"
        >
          <option value="0">Male</option>
          <option value="1">Female</option>
        </select>
        <input
          type="text"
          placeholder="Enter your genotype"
          name="genotype"
          value={patientRec.genotype}
          onChange={handleChangePatientRec}
        />
        <input
          type="text"
          placeholder="Enter your symptoms"
          name="symptoms"
          value={patientRec.symptoms}
          onChange={handleChangePatientRec}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            write?.();
          }}
        >
          Add
        </button>
      </form>

      {allrec?.map((rec) => (
        <div>Data: {rec.name}</div>
      ))}

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          write?.();
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default SignupPatient;
