import React, { useState, useEffect, Fragment } from "react";
// import _ from "lodash";
import { cloneDeep } from "lodash";
import * as S from "./styled";
// import image1 from "../../assets/images/1-thumb.jpg";

// import images
import img1 from "../../assets/images/1-thumb.jpg";
import img2 from "../../assets/images/2-thumb.jpg";
import img3 from "../../assets/images/3-thumb.jpg";
import img4 from "../../assets/images/4-thumb.jpg";
import img5 from "../../assets/images/5-thumb.jpg";
import img6 from "../../assets/images/6-thumb.jpg";
import img7 from "../../assets/images/7-thumb.jpg";

console.log("img 1: ", img1);

//Img full
import imgfull1 from "../../assets/images/1.jpg";
import imgfull2 from "../../assets/images/2.jpg";
import imgfull3 from "../../assets/images/3.jpg";
import imgfull4 from "../../assets/images/4.jpg";
import imgfull5 from "../../assets/images/5.jpg";
import imgfull6 from "../../assets/images/6.jpg";
import imgfull7 from "../../assets/images/7.jpg";

console.log("imgfull 1: ", imgfull1);

const tagData = [
  {
    id: 1,
    name: "javascript",
  },
  {
    id: 2,
    name: "photography",
  },
  {
    id: 3,
    name: "webdesign",
  },
  {
    id: 4,
    name: "illustration",
  },
  {
    id: 5,
    name: "animation",
  },
];

const ProjectData = [
  {
    id: 1,
    name: "Help us",
    position: 1,
    show: false,
    image: img1,
    imagefull: imgfull1,
    tag: "photography",
  },
  {
    id: 2,
    name: "Enginner software",
    position: 2,
    image: img2,
    imagefull: imgfull2,
    show: false,
    tag: "javascript",
  },
  {
    id: 3,
    name: "website",
    position: 3,
    image: img3,
    imagefull: imgfull3,
    show: false,
    tag: "webdesign",
  },
  {
    id: 4,
    name: "landingpage",
    position: 4,
    image: img4,
    imagefull: imgfull4,
    show: false,
    tag: "webdesign",
  },
  {
    id: 5,
    name: "effect shamble",
    position: 5,
    image: img5,
    imagefull: imgfull5,
    show: false,
    tag: "illustration",
  },
  {
    id: 6,
    name: "effect snow",
    position: 6,
    image: img6,
    imagefull: imgfull6,
    show: false,
    tag: "animation",
  },
  {
    id: 7,
    name: "image craft",
    position: 7,
    image: img7,
    imagefull: imgfull7,
    show: false,
    tag: "animation",
  },
];

// const ModalData = [
//   {
//     id: 1,
//     name: "Help us",
//     show: false,
//     img: img1,
//     imgFull: imgfull1,
//     tag: "photography",
//   },
//   {
//     id: 2,
//     name: "Enginner software",
//     img: img2,
//     imgFull: imgfull2,
//     show: false,
//     tag: "javascript",
//   },
//   {
//     id: 3,
//     name: "website",
//     img: img3,
//     imgFull: imgfull3,
//     show: false,
//     tag: "webdesign",
//   },
//   {
//     id: 4,
//     name: "landingpage",
//     img: img4,
//     imgFull: imgfull4,
//     show: false,
//     tag: "webdesign",
//   },
//   {
//     id: 5,
//     name: "effect shamble",
//     img: img5,
//     imgFull: imgfull5,
//     show: false,
//     tag: "illustration",
//   },
//   {
//     id: 6,
//     name: "effect snow",
//     img: img6,
//     imgFull: imgfull6,
//     show: false,
//     tag: "animation",
//   },
//   {
//     id: 7,
//     name: "image craft",
//     img: img7,
//     imgFull: imgfull7,
//     show: false,
//     tag: "animation",
//   },
// ];

export default () => {
  const [projects, setProjects] = useState(ProjectData);
  console.log("Projects state: ", projects);
  const [projectsClone, setProjectsClone] = useState([]);
  // const [modals, setModals] = useState(ModalData);
  // console.log("modals state: ", modals);
  const [modalsClone, setModalsClone] = useState([]);
  console.log("modals clone state: ", modalsClone);
  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState({});

  const loadAllProjects = () => {
    console.log("All projects");
    // const copyProjects = projects.map((item) => item);
    const copyProjects = cloneDeep(projects);
    console.log("LoadAll Copy Projects: ", copyProjects);
    copyProjects.forEach((item) => {
      //Set all to true
      item.show = true;
      return item;
    });
    setProjectsClone([...copyProjects]);
  };

  useEffect(() => {
    loadAllProjects();
  }, []);

  const loadProjectByTag = (tag) => {
    console.log("Load by Tag - projects Original: ", projects);
    // const copyProjects = [...projects];
    // const copyProjects = projects.map((item) => item);
    const copyProjects = JSON.parse(JSON.stringify(projects)); //clonar state projects using Deep copy
    console.log("Load by Tag - copyProjects2: ", copyProjects);

    const newProjects = copyProjects.map((project) => {
      // set show to false in all projects
      // project.show = false;
      if (project.tag == tag) {
        project.show = true;
        console.log("project by tag - project: ", project);
      }
      return project;
    });

    console.log("New Projects: ", newProjects);
    setProjectsClone([...newProjects]);
  };

  //Modals

  const openModal = (id) => {
    //Show modal container
    setShowModal(true);

    // const copyModals = _.cloneDeep(modals);
    // const copyModals = cloneDeep(projects);

    const copyModals = JSON.parse(JSON.stringify(projects));
    console.log("openmodal copyModals: ", copyModals);

    let selectedModal = copyModals.find((item) => item.id == id);
    console.log("selectedModal: ", selectedModal);
    selectedModal.show = true;

    //Active Modal
    setActiveModal(selectedModal);

    // Remover modal antigo
    const filteredModals = copyModals.filter((item) => item.id != id);
    console.log("open filteredModals: ", filteredModals);

    // setProjectsClone([...filteredModals, selectedModal]);
    setModalsClone([...filteredModals, selectedModal]);
  };

  const closeModal = (id) => {
    //Close modal container
    setShowModal(false);

    // const copyModals = _.cloneDeep(modals);
    // const copyModals = cloneDeep(projects);
    const copyModals = JSON.parse(JSON.stringify(projects));
    // const copyModals = JSON.parse(JSON.stringify(modals));
    const newModals = copyModals.map((item) => {
      if (item.id == id) {
        item.show = false;
      }
      return item;
    });

    console.log("CloseModals - newModals: ", newModals);
    // setProjectsClone([...newModals]);
    setModalsClone([...newModals]);
  };

  const next = (id) => {
    console.log("next - id: ", id);
    const copyModals = JSON.parse(JSON.stringify(projects));
    let selectedItem = copyModals.find((item) => item.id == id);
    console.log("Next selectedItem: ", selectedItem);
    let actualPositon = selectedItem.position;
    const nextPosition = ++actualPositon;
    console.log("nextPosition: ", nextPosition);
    // FilteredItems

    if (nextPosition <= copyModals.length) {
      let selectedItemNext = copyModals.find(
        (item) => item.position == nextPosition
      );
      selectedItemNext.show = true;
      console.log("selectedItemNext: ", selectedItemNext);
      const filteredItems = copyModals.filter(
        (item) => item.id != selectedItemNext.id
      );
      console.log("Next filteredItems: ", filteredItems);

      // actualize next item
      setModalsClone([...filteredItems, selectedItemNext]);

      // Change active modal
      setActiveModal(selectedItemNext);
    } else {
      let selectedItemInit = copyModals.find((item) => item.position == 1);
      selectedItemInit.show = true;
      console.log("selectedItemInit: ", selectedItemInit);
      const filteredItems = copyModals.filter(
        (item) => item.id != selectedItemInit.id
      );
      console.log("Next Init filteredItems: ", filteredItems);

      // actualize next item
      setModalsClone([...filteredItems, selectedItemInit]);

      // Change active modal
      setActiveModal(selectedItemInit);
    }
  };

  const prev = (id) => {
    const copyModals = JSON.parse(JSON.stringify(projects));
    let selectedItem = copyModals.find((item) => item.id == id);
    console.log("Prev selectedItem: ", selectedItem);
    let actualPositon = selectedItem.position;
    const prevPosition = --actualPositon;
    console.log("prevPosition: ", prevPosition);

    if (prevPosition >= 1) {
      let selectedItemPrev = copyModals.find(
        (item) => item.position == prevPosition
      );
      console.log("selectedItemPrev: ", selectedItemPrev);
      selectedItemPrev.show = true;
      const filteredItems = copyModals.filter(
        (item) => item.id != selectedItemPrev.id
      );
      console.log("Prev filteredItems: ", filteredItems);

      // actualize next item
      setModalsClone([...filteredItems, selectedItemPrev]);

      // Change active modal
      setActiveModal(selectedItemPrev);
    } else {
      let selectedItemFinal = copyModals.find(
        (item) => item.position == copyModals.length
      );
      selectedItemFinal.show = true;
      console.log("selectedItemFinal: ", selectedItemFinal);
      const filteredItems = copyModals.filter(
        (item) => item.id != selectedItemFinal.id
      );
      console.log("Prev Final filteredItems: ", filteredItems);

      // actualize next item
      setModalsClone([...filteredItems, selectedItemFinal]);

      // Change active modal
      setActiveModal(selectedItemFinal);
    }
  };

  return (
    <Fragment>
      <S.WrapperPortfolio>
        <div className="header-tags">
          <div onClick={() => loadAllProjects()} className="tag-item">
            All
          </div>
          {tagData.map((tag) => {
            return (
              <div
                key={tag.id}
                onClick={() => loadProjectByTag(tag.name)}
                className="tag-item"
              >
                {tag.name}
              </div>
            );
          })}
        </div>
        <h3 className="title">our works which makes you just wow</h3>
        <div className="wrapper-projects">
          {projectsClone.map((item) => {
            // console.log("Item project: ", item);
            return (
              <>
                {item.show && (
                  <div key={item.id} className="project-item">
                    <figure onClick={() => openModal(item.id)}>
                      <img src={item.image} alt="teste" />
                    </figure>
                    <h3> {item.name} </h3>
                    <p> {item.tag} </p>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </S.WrapperPortfolio>
      <Fragment>
        {showModal && (
          <>
            <S.WrapperModal>
              {modalsClone.map((item) => {
                console.log("modals imageFull: ", item);
                return (
                  <>
                    {item.show && (
                      <>
                        <div key={"modal" + item.id} className="modal-content">
                          <span
                            onClick={() => closeModal(item.id)}
                            className="close"
                          >
                            &times;
                          </span>
                          <figure>
                            <img src={item.imagefull} alt="teste" />
                            {/* <figcaption>5/8</figcaption> */}
                            <figcaption>
                              {item.id} / {projectsClone.length}
                            </figcaption>
                          </figure>
                        </div>
                        <S.WrapperButtons>
                          <S.leftArrow onClick={() => prev(activeModal.id)} />
                          <S.rightArrow onClick={() => next(activeModal.id)} />
                        </S.WrapperButtons>
                      </>
                    )}
                  </>
                );
              })}
            </S.WrapperModal>
          </>
        )}
      </Fragment>
    </Fragment>
  );
};
