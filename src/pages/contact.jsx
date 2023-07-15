import React, { useRef } from "react";
import styled from "styled-components";
import Input from "../components/input";
import Select from "../components/select";
import TextArea from "../components/textArea";
import { brown, pink } from "../const/colors";
import { motion, AnimatePresence } from "framer-motion";
import CategoryItem from "../components/categoryItem";
import { LOGO, services_ } from "../const/const";

const Wrapper = styled.div`
  text-align: center;
  height: 100%;
  background-color: ${brown};
  padding-bottom: 5%;
 
`;

const Button = styled.button`
  background-color: ${pink};
  width: 246px;
  height: 56px;
  border-radius: 50px;
  border: none;
  font-family: "Arvo";
  font-weight: 400;
  font-size: 20px;
  color: white;
  margin-top: 20px;
`;

const DivWrapper = styled.div`
  background-color: white;
  width: 600px;
  min-width: 100px;
  margin: 0 auto;
  border-radius: 20px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  padding-top: 1%;
  padding-bottom: 3%;


`

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

 width: 100%;
`
const Image = styled.img`
   width: 100px;
`
const ContactUs = () => {
  const form = useRef();

  return (
    <>
      {/* <Navbar /> */}
      <Wrapper>
        {/* <Title>We make your idea</Title> */}
        <Image src={LOGO}/>

        <AnimatePresence mode="wait">
          <motion.div
            key={true}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
            
          >
            <DivWrapper>
              <Categories>
              {services_.map(item=>{
                return(
                  <CategoryItem item={item}/>
                )
              })

              }
              </Categories>

            </DivWrapper>
            {/* <form ref={form} className="web__booking_form">
              <Input type="text" placeholder="Firts Name" name="firts_name" />
              <br />
              <Input type="text" placeholder="Last Name" name="last_name" />
              <br />
              <Input type="email" placeholder="Email" name="email" />
              <br />
              <Input type="text" placeholder="budget" name="budget" />
              <br />
              <Select id={""} name="service" />
              <br />
              <TextArea name="message" />
            </form> */}
          </motion.div>
        </AnimatePresence>
        <Button text={"Submit"} onClick={(e) => ""}>
          Submit
        </Button>
      </Wrapper>
    </>
  );
};

export default ContactUs;
