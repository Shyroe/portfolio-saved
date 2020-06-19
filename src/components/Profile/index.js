import React from "react";
import avatar1 from "../../assets/images/avatar1.jpg";

import * as S from "./styled";

const index = () => {
  return (
    <S.WrapperProfile>
      <S.ProfilePicture>
        <img src={avatar1} alt="a" />
      </S.ProfilePicture>
      <S.ProfessionalInfo>
        <h2>tim wilson</h2>
        <h4>graphic & web designer</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint alias
          blanditiis nesciunt incidunt nobis illum quas tenetur
        </p>
      </S.ProfessionalInfo>
      <S.PersonalInfo>
        <span>name: tim wilson</span>
        <span>birthday: april, 10, 1989</span>
        <span>address: 4630 geneva street ny usa</span>
        <span>email: tim.wilson@yahoo.com</span>
        <span>phone: 917-508-9924</span>
        <span>website: www.timwilson.com</span>
      </S.PersonalInfo>
    </S.WrapperProfile>
  );
};

export default index;
