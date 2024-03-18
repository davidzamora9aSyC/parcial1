import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [data, setData] = useState("cargandoo nombre");
  const [mostrar, setMostrar] = useState(false);

  const navigate = useNavigate();

  const handleModificar = () => {
    navigate("/perfil");
  };

  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/davidzamora9aSyC/parcial1/master/src/profile.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const handleClick = () => {
    setMostrar(true);
  };

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#9de2ff" }}>
      <Modal show={mostrar} onHide={() => setMostrar(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Detalle de la Imagen</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img  src="https://picsum.photos/350"  alt="Imagen seleccionada" style={{ width: '100%' }} />
      </Modal.Body>
    </Modal>

      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <button
                    className="rounded-circle"
                    onClick={handleModificar}
                    style={{ backgroundColor: "black", border: "none" }}
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      className="mt-4 mb-2 img-thumbnail rounded-circle"
                      fluid
                      style={{ width: "250px", zIndex: "1" }}
                    />
                  </button>

                  <MDBBtn
                    outline
                    color="dark"
                    style={{ height: "52vh", overflow: "visible" }}
                    href="/perfil"
                    to="/perfil"
                  >
                    <FormattedMessage
                      id="profile.modifyProfile"
                      defaultMessage="Modify profile"
                    />
                  </MDBBtn>
                </div>
                <div className="mb-4">
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <div
                      className="text-left"
                      style={{ textAlign: "left" }}
                      tag="h5"
                    >
                      {data.username}
                    </div>
                  </div>

                  <div >
                    {data.name} {data.description}
                    <div style={{ textAlign: "left" }}>{data.web}</div>
                  </div>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">
                      <FormattedMessage
                        id="profile.photos"
                        defaultMessage="Photosss"
                      />
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      {data.photos}
                    </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">
                      <FormattedMessage
                        id="profile.followers"
                        defaultMessage="Followers"
                      />
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      {data.followers}
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">
                      <FormattedMessage
                        id="profile.following"
                        defaultMessage="following"
                      />
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      {data.following}
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">
                    <FormattedMessage
                      id="profile.recentPhotos"
                      defaultMessage="recent photos"
                    />
                  </MDBCardText>
   
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <button onClick={handleClick}>
                      <MDBCardImage
                        src="https://picsum.photos/350"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </button>
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <button onClick={handleClick}>
                      <MDBCardImage
                        src="https://picsum.photos/350"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </button>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <button onClick={handleClick}>
                      <MDBCardImage
                        src="https://picsum.photos/350"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </button>
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <button onClick={handleClick}>
                      <MDBCardImage
                        src="https://picsum.photos/350"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </button>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <button onClick={handleClick}>
                      <MDBCardImage
                        src="https://picsum.photos/350"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </button>
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <button onClick={handleClick}>
                      <MDBCardImage
                        src="https://picsum.photos/350"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </button>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <button onClick={handleClick}>
                      <MDBCardImage
                        src="https://picsum.photos/350"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </button>
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <button onClick={handleClick}>
                      <MDBCardImage
                        src="https://picsum.photos/350"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </button>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <button onClick={handleClick}>
                      <MDBCardImage
                        src="https://picsum.photos/350"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </button>
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <button onClick={handleClick}>
                      <MDBCardImage
                        src="https://picsum.photos/350"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </button>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
