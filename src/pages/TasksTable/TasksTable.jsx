import { useState } from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

function TasksTable() {
    const [atividades, setAtividades] = useState([])

    const [name, setNome] = useState('')
    const [date, setDate] = useState({})

    return (
        <div className='App'>
            <br />
            <form className='formNewAtv' onSubmit={adicionarAtv}>
                <InputText value={name} onChange={(e) => setNome(e.target.value)} placeholder='Nome' required />
                <Calendar value={date} onChange={(e) => setDate(e.target.value)} placeholder='Data de entrega' showIcon required />
                <Button type='onSubmit' label="Adicionar" icon="pi pi-plus" />
            </form>

            <br />

            <DataTable value={atividades} tableStyle={{ minWidth: '40rem' }} paginator rows={10} rowsPerPageOptions={[5, 10, 25]}>
                <Column field="nome" header="Nome"></Column>
                <Column field="data" header="Data"></Column>
                <Column body={(atv) => btnDelete(atv.nome)} header="Delete"></Column>
            </DataTable>
        </div>
    )

    function adicionarAtv(e) {
        e.preventDefault()
        let newArray = {
            nome: name,
            data: date.toLocaleDateString('pt-BR')
        }
        setAtividades([...atividades, newArray])
        setNome('')
        setDate({})
    }

    function deletar(nome) {
        let aux = atividades
        setAtividades(aux.filter(atividade => atividade.nome != nome))
    }

    function btnDelete(nome) {
        return (
            <button onClick={() => deletar(nome)}><i className="pi pi-trash"></i></button>
        )
    }
}

export default TasksTable