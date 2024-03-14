import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormularioTuto() {
    const [formValues, setFormValues] = useState({ email: "", password: "", favClass: "1" });
    const [validationStates, setValidatioStates] = useState({ emailState: true, passwordState: true });


    const handleEmailChange = (e) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const esCorreoValido = emailPattern.test(e.target.value);

        if (!esCorreoValido) {
            setValidatioStates({ ...validationStates, emailState: false });
        } else {
            setValidatioStates({ ...validationStates, emailState: true });
        }

        setFormValues({ ...formValues, email: e.target.value });
    };


    const handlePasswordChange = (e) => {
        const conjuntoL = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const conjuntoN = '1234567890';
        let cumpleL = false;
        let cumpleN = false;
        let cumple = false;
        if (e.target.value.length >= 9) {
            for (let i = 0; i < conjuntoL.length; i++) {
                if (e.target.value.includes(conjuntoL[i])) {
                    cumpleL = true;
                    break;
                }

            }
            for (let i = 0; i < conjuntoN.length; i++) {
                if (e.target.value.includes(conjuntoN[i])) {
                    cumpleN = true;
                    break;
                }
            }
        }
        if (cumpleL && cumpleN){
            cumple = true;
        }

        setValidatioStates({ ...validationStates, passwordState: cumple });
        setFormValues({ ...formValues, password: e.target.value });
    };


    const handleSelectChange = ((e) => {
        setFormValues({ ...formValues, favClass: e.target.value })
    });



    const clickSubmit = (() => {
        //Call fetch
        alert(JSON.stringify(formValues))
    })

    const [data, setData] = useState("cargandoo nombre");
  
    useEffect(()=>{
        const URL = "https://raw.githubusercontent.com/davidzamora9aSyC/parcial1/master/src/profile.json";
        fetch(URL).then(data => data.json()).then(data => {
            setData(data);
        })
    }, []);

    return (
        
        <div>
            <h1>Ejemplo de formularios!</h1>
            <img src="https://picsum.photos/100"  />
            
            <Button className='m-4 ' href="/">
                Volver
            </Button>
            <Form>
                <Form.Group className="mb-6" controlId="formBasicEmail">
                    <div><Form.Label>Nombre de usuario</Form.Label></div>
                    <textarea value={data.username}></textarea>
                </Form.Group>
                <Form.Group className="mb-6" controlId="formBasicEmail">
                    <div><Form.Label>Nombre completo</Form.Label></div>
                    <textarea value={data.name}></textarea>
                </Form.Group>
                <Form.Group className="mb-6" controlId="formBasicEmail">
                    <div><Form.Label>descripcion</Form.Label></div>
                    <textarea value={data.description}></textarea>
                </Form.Group>
                <Form.Group className="mb-6" controlId="formBasicEmail">
                    <div><Form.Label>url de pagina Website</Form.Label></div>
                    <textarea value={data.web}></textarea>
                </Form.Group>
                
                <Button variant="primary" onClick={clickSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default FormularioTuto;
