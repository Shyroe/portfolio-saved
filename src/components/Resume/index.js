import React from "react";
import * as S from "./styled";
import qrcode from "../../assets/images/qr.png";

// const index = ({ activeTheme }) => {
export default ({ activeTheme }) => {
  const professionalInfo = {
    name: "tim wilson",
    occupation: "creative designer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed euismod elit. Morbi et diam sed arcu lacinia elementum.",
  };

  const contactInfo = {
    phone: "97836277882",
    address: "Demmis India J-219, saket new Delphi",
    email: "info@demmisindia.com",
  };

  const experiences = [
    {
      id: 1,
      date: "2010-2012",
      title: "project manager",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed",
    },
    {
      id: 2,
      date: "2012-2014",
      title: "networking enginner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed",
    },
    {
      id: 3,
      date: "2014-2016",
      title: "web designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed",
    },
    {
      id: 4,
      date: "2018-2019",
      title: "content marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed",
    },
  ];

  const education = [
    {
      id: 1,
      date: "2010-2012",
      title: "senac catanduva",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed",
    },
    {
      id: 2,
      date: "2012-2014",
      title: "engenharia sistemas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed",
    },
  ];

  const tecnologyInfo = [
    {
      id: 1,
      abreviatename: "ps",
      name: "photoshop",
      nivel: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
    },
    {
      id: 2,
      abreviatename: "ai",
      name: "illustrator",
      nivel: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    },
    {
      id: 3,
      abreviatename: "h",
      name: "html",
      nivel: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
      ],
    },
    {
      id: 4,
      abreviatename: "js",
      name: "javascript",
      nivel: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
      ],
    },
  ];

  const interestsInfo = [
    {
      id: 1,
      name: "travel",
    },
    {
      id: 2,
      name: "music",
    },
    {
      id: 3,
      name: "video",
    },
    {
      id: 4,
      name: "cycling",
    },
    {
      id: 5,
      name: "coocking",
    },
    {
      id: 6,
      name: "sports",
    },
  ];

  const locationInfo = {
    phone: "45534546565",
    email: "info@gmail.com",
    location: "Demmis india J-219, saket new Delphi - 110017",
  };

  return (
    <S.WrapperResume activeTheme={activeTheme}>
      <S.LeftWrapper>
        <S.WrapperProfessionalInfo activeTheme={activeTheme}>
          <h2>
            tim<span>wilson</span>
          </h2>
          <h4>{professionalInfo.occupation}</h4>
          <p>{professionalInfo.content}</p>
        </S.WrapperProfessionalInfo>
        <S.WrapperContactInfo activeTheme={activeTheme}>
          <div className="contactItem">
            <h5>phone:</h5>
            <span>{contactInfo.phone}</span>
          </div>
          <div className="contactItem">
            <h5>address:</h5>
            <span>{contactInfo.address}</span>
          </div>
          <div className="contactItem">
            <h5>email us:</h5>
            <span>{contactInfo.email}</span>
          </div>
        </S.WrapperContactInfo>
        <S.WrapperExperiences activeTheme={activeTheme}>
          <h3>experience</h3>
          <div className="wrapper-projects">
            {experiences.map((item) => {
              return (
                <div key={item.id} className="project-item">
                  <div>{item.date}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </S.WrapperExperiences>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.WrapperTecnologyInfo activeTheme={activeTheme}>
          <div className="header-logos">
            {tecnologyInfo.map((tec) => {
              return (
                <div className="tech-item" key={tec.id}>
                  <div className="logo">{tec.abreviatename}</div>
                  <div className="list-niveis">
                    {tec.nivel.map((item) => {
                      return <div key={item.id} className="nivel"></div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <S.WrapperHab activeTheme={activeTheme}>
            <h3>my skills</h3>
            {tecnologyInfo.map((hab) => {
              console.log("hab nivel: ", hab.nivel);
              console.log("hab nivel length: ", hab.nivel.length);
              console.log("hab nivel length * 10: ", hab.nivel.length * 10);
              return (
                <S.HabItem
                  activeTheme={activeTheme}
                  size={hab.nivel.length * 10}
                  key={hab.id}
                  className="hab"
                >
                  <span> {hab.name} </span>
                  <div className="progressbar"></div>
                </S.HabItem>
              );
            })}
          </S.WrapperHab>
        </S.WrapperTecnologyInfo>
        <S.WrapperInterests>
          <h3>interests</h3>
          <div className="wrapper-icons">
            <div className="icon-item">
              <S.IconTravel />
              <span>travel</span>
            </div>
            <div className="icon-item">
              <S.IconMusic />
              <span>music</span>
            </div>
            <div className="icon-item">
              <S.IconVideo />
              <span>video</span>
            </div>
            <div className="icon-item">
              <S.IconCycling />
              <span>cycling</span>
            </div>
            <div className="icon-item">
              <S.IconCoocking />
              <span>coocking</span>
            </div>
            <div className="icon-item">
              <S.IconSports />
              <span>sports</span>
            </div>
          </div>
        </S.WrapperInterests>
        <S.WrapperEducation activeTheme={activeTheme}>
          <h3>education</h3>
          <div className="wrapper-projects">
            {education.map((item) => {
              return (
                <S.ProjectItem
                  activeTheme={activeTheme}
                  key={item.id}
                  className="project-item"
                >
                  <div>{item.date}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </S.ProjectItem>
              );
            })}
          </div>
        </S.WrapperEducation>
        <S.WrapperLocation activeTheme={activeTheme}>
          <div className="box">
            <figure>
              <img src={qrcode} alt="teste" />
            </figure>
            <div className="wrapper-info">
              <div className="box-item">
                <S.IconPhone />
                <span> {locationInfo.phone} </span>
              </div>
              <div className="box-item">
                <S.IconEmail />
                <span> {locationInfo.email} </span>
              </div>
              <div className="box-item">
                <S.IconLocationPin />
                <span> {locationInfo.location} </span>
              </div>
            </div>
          </div>
        </S.WrapperLocation>
      </S.RightWrapper>
    </S.WrapperResume>
  );
};

// export default index;

{
  /* <S.WrapperResume activeTheme={activeTheme}>
<S.Row>
  <S.WrapperProfessionalInfo activeTheme={activeTheme}>
    <h2>
      tim<span>wilson</span>
    </h2>
    <h4>{professionalInfo.occupation}</h4>
    <p>{professionalInfo.content}</p>
  </S.WrapperProfessionalInfo>
  <S.WrapperTecnologyInfo activeTheme={activeTheme}>
    <div className="header-logos">
      {tecnologyInfo.map((tec) => {
        return (
          <div className="tech-item" key={tec.id}>
            <div className="logo">{tec.abreviatename}</div>
            <div className="list-niveis">
              {tec.nivel.map((item) => {
                return <div key={item.id} className="nivel"></div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
    <S.WrapperHab activeTheme={activeTheme}>
      <h3>my skills</h3>
      {tecnologyInfo.map((hab) => {
        console.log("hab nivel: ", hab.nivel);
        console.log("hab nivel length: ", hab.nivel.length);
        console.log("hab nivel length * 10: ", hab.nivel.length * 10);
        return (
          <S.HabItem
            activeTheme={activeTheme}
            size={hab.nivel.length * 10}
            key={hab.id}
            className="hab"
          >
            <span> {hab.name} </span>
            <div className="progressbar"></div>
          </S.HabItem>
        );
      })}
    </S.WrapperHab>
  </S.WrapperTecnologyInfo>
</S.Row>
<S.Row>
  <S.WrapperContactInfo activeTheme={activeTheme}>
    <div className="contactItem">
      <h5>phone:</h5>
      <span>{contactInfo.phone}</span>
    </div>
    <div className="contactItem">
      <h5>address:</h5>
      <span>{contactInfo.address}</span>
    </div>
    <div className="contactItem">
      <h5>email us:</h5>
      <span>{contactInfo.email}</span>
    </div>
  </S.WrapperContactInfo>
  <S.WrapperInterests>
    <h3>interests</h3>
    <div className="wrapper-icons">
      <div className="icon-item">
        <S.IconTravel />
        <span>travel</span>
      </div>
      <div className="icon-item">
        <S.IconMusic />
        <span>music</span>
      </div>
      <div className="icon-item">
        <S.IconVideo />
        <span>video</span>
      </div>
      <div className="icon-item">
        <S.IconCycling />
        <span>cycling</span>
      </div>
      <div className="icon-item">
        <S.IconCoocking />
        <span>coocking</span>
      </div>
      <div className="icon-item">
        <S.IconSports />
        <span>sports</span>
      </div>
    </div>
  </S.WrapperInterests>
</S.Row>
<S.Row>
  <S.WrapperExperiences activeTheme={activeTheme}>
    <h3>experience</h3>
    <div className="wrapper-projects">
      {experiences.map((item) => {
        return (
          <div key={item.id} className="project-item">
            <div>{item.date}</div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  </S.WrapperExperiences>
  <S.GroupWrapper>
    <S.WrapperEducation activeTheme={activeTheme}>
      <h3>education</h3>
      <div className="wrapper-projects">
        {education.map((item) => {
          return (
            <S.ProjectItem
              activeTheme={activeTheme}
              key={item.id}
              className="project-item"
            >
              <div>{item.date}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </S.ProjectItem>
          );
        })}
      </div>
    </S.WrapperEducation>
    <S.WrapperLocation activeTheme={activeTheme}>
      <div className="box">
        <figure>
          <img src={qrcode} alt="teste" />
        </figure>
        <div className="wrapper-info">
          <div className="box-item">
            <S.IconPhone />
            <span> {locationInfo.phone} </span>
          </div>
          <div className="box-item">
            <S.IconEmail />
            <span> {locationInfo.email} </span>
          </div>
          <div className="box-item">
            <S.IconLocationPin />
            <span> {locationInfo.location} </span>
          </div>
        </div>
      </div>
    </S.WrapperLocation>
  </S.GroupWrapper>
</S.Row>
</S.WrapperResume> */
}
