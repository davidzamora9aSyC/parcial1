import React, { useEffect, useState } from "react";
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

export default function Profile() {
    const [data, setData] = useState("cargandoo nombre");
    const [mostrar, setMostrar] = useState(false);
    useEffect(()=>{
        const URL = "https://raw.githubusercontent.com/davidzamora9aSyC/parcial1/master/src/profile.json";
        fetch(URL).then(data => data.json()).then(data => {
            setData(data);
        })
    }, []);
    const handleClick= ()=>{setMostrar(true)}


  
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#9de2ff" }}>
        {mostrar && <div>aqui se muestra la imageeeeeeen</div>}
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
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    
                    style={{ width: "150px", zIndex: "1" }}
                  />
                  <MDBBtn
                    outline
                    color="dark"
                    style={{ height: "52vh", overflow: "visible" }}
                    href ="/perfil"
                    to= "/perfil"
                  >
                modificar perfil
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <MDBTypography tag="h5">{data.name}</MDBTypography>
                  <MDBCardText> {data.description}</MDBCardText>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      {data.photos}
                    </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      {data.followers}
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      {data.following}
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Website</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                        {data.web}
                    </MDBCardText>
               
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">
                    Recent photos
                  </MDBCardText>
                  <MDBCardText className="mb-0">
                    <a href="#!" className="text-muted">
                      Show all
                    </a>
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
                </MDBRow><MDBRow>
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
                </MDBRow><MDBRow>
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
                </MDBRow><MDBRow>
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
