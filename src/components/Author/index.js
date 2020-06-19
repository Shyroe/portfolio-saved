import React, { useState } from "react";

import * as S from "./styled";

const index = () => {
  const [isActiveShare, setIsActiveShare] = useState(false);

  const toggleShare = () => {
    setIsActiveShare(!isActiveShare);
  };
  return (
    <S.WrapperAuthor>
      <S.Author>
        <h2>tim wilson</h2>
        <h4>graphic & web designer</h4>
      </S.Author>
      <S.WrapperShare>
        <S.WrapperSocialIcon active={isActiveShare}>
          <S.IconTwitter />
          <S.IconLinkedin />
          <S.IconFacebook />
          <S.IconWhatsapp />
        </S.WrapperSocialIcon>
        <S.WrapperRedo onClick={toggleShare}>
          <S.IconRedo />
        </S.WrapperRedo>
      </S.WrapperShare>
    </S.WrapperAuthor>
  );
};

export default index;
