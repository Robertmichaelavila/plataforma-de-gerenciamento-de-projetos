import {useState, useEffect} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import styles from './ProjetoForm.module.css'
import Submit from '../form/Submit'

function ProjetoForm({btnText}){

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return(
        <form className={styles.form}>
            <Input type="text" text='Nome do Projeto' name='name' placeholder='Insira o nome do projeto'/>
            <Input type="text" text='Nome do Projeto' name='name' placeholder='Insira o orçamento do projeto'/>
            <Select name="category_id" text="Selecione a categoria" options={categories}/>
            <Submit text={btnText}/>
        </form>
    )
}

export default ProjetoForm