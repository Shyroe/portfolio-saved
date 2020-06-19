import React, { Fragment } from "react";
import * as S from "./styled";
export default () => {
  return (
    <Fragment>
      <S.WrapperMap>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8592.609669211724!2d-48.814268076985286!3d-21.247352526343622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94beae7b839dd671%3A0x52bfc9abb420eea4!2sSanta%20Ad%C3%A9lia%2C%20SP%2C%2015950-000!5e0!3m2!1spt-BR!2sbr!4v1579860566576!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          // frameborder="0"
          // style="border:0;"
          // allowfullscreen=""
        ></iframe>
      </S.WrapperMap>
      <S.WrapperRow>
        <S.WrapperInfo>
          <div>
            <S.HeaderContact>contact info</S.HeaderContact>
          </div>
          <div className="contact-info">
            <p>4630 Geneva Street NY USA</p>
            <p>EMAIL: tim.wilson@yahoo.com</p>
            <p>PHONE: 917-508-9924</p>
            <p>WEBSITE: www.timwilson.com</p>
          </div>
        </S.WrapperInfo>
        <S.WrapperContact>
          <div>
            <S.HeaderContact>let's keep in touch</S.HeaderContact>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="">your name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="">your email</label>
              <input type="text" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="">your message</label>
              <input type="message" placeholder="Your Email" />
            </div>
            <div>
              <button className="btn-contact">Send your message</button>
            </div>
          </form>
        </S.WrapperContact>
      </S.WrapperRow>
    </Fragment>
  );
};
