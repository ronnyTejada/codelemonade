import React,{useEffect} from "react";
import styled from "styled-components";

const MySelect = styled.select`
  border-radius: 5px;
  border-width: 1px;
  height: 40px;
  width: 70%;
`;

const Select = ({id,name}) => {

  useEffect(()=>{
    console.log(id)
  },[])

  return (
    <MySelect name={name}>
      <option value="#" selected={id===null?true:false}>
        Choose Service
      </option>

      <option value="web site" selected={id==='1'?true:false}>Web Site</option>
      <option value="web app" selected={id==='2'?true:false}>Web App</option>
      <option value="mobile app" selected={id==='3'?true:false}>Mobile App</option>
    </MySelect>
  );
};

export default Select;