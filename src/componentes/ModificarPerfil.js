import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormattedMessage } from "react-intl";

function FormularioTuto() {
    const [data, setData] = useState("cargandoo nombre");
    const [isEditable, setIsEditable] = useState(false);


    const clickSubmit = (() => {
   
        alert(JSON.stringify(data))
    })


  
    useEffect(()=>{
        const URL = "https://raw.githubusercontent.com/davidzamora9aSyC/parcial1/master/src/profile.json";
        fetch(URL).then(data => data.json()).then(data => {
            setIsEditable(Math.random() < 0.5);
            setData(data);
        })
    }, []);

    const renderField = (value) => {
        return isEditable ? (
            <textarea value={value}></textarea>
        ) : (
            <p>{value}</p>
        );
    };

    return (
        
        <div>
       
       <img src="https://picsum.photos/100" alt="foto de perfil" className="rounded-circle" />

      
            <Form>
                <Form.Group className="mb-6" controlId="formBasicEmail">
                    <div><Form.Label>
                        
                    <FormattedMessage
                      id="form.username"
                      defaultMessage="username"
                    />
                    </Form.Label></div>
                    {renderField(data.username, "form.username", "username")}
                </Form.Group>
                <Form.Group className="mb-6" controlId="formBasicEmail">
                    <div><Form.Label>
                        <FormattedMessage
                      id="form.fullName"
                      defaultMessage="full name"
                    />
                    
                    
                    </Form.Label></div>
                    {renderField(data.name, "form.fullName", "full name")}
                </Form.Group>
                <Form.Group className="mb-6" controlId="formBasicEmail">
                    <div><Form.Label>
              
                        <FormattedMessage
                      id="form.description"
                      defaultMessage="description"
                    />
                                     
                        </Form.Label></div>
                        {renderField(data.description, "form.description", "description")}
                </Form.Group>
                <Form.Group className="mb-6" controlId="formBasicEmail">
                    <div><Form.Label>
                        
        
                        <FormattedMessage
                      id="form.websiteUrl"
                      defaultMessage="website url"
                    />
                        </Form.Label></div>
                        {renderField(data.web, "form.websiteUrl", "website url")}
                </Form.Group>
                
                <Button variant="primary" onClick={clickSubmit}>
               
                        <FormattedMessage
                      id="form.submit"
                      defaultMessage="submit"
                    />
                </Button>
                      
            <Button className='m-4 ' href="/">
    
                        <FormattedMessage
                      id="form.goBack"
                      defaultMessage="go back"
                    />
            </Button>
            </Form>
        </div>
    );
}

export default FormularioTuto;
