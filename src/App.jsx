import { useState } from 'react'
import { IMaskInput } from "react-imask";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';




import './App.css'

function App() {

  const [atividades, setAtividades] = useState([])

  const [name, setNome] = useState('')
  const [date, setDate] = useState('')

  return (
    <div className='App'>
      <br />
      <form className='formNewAtv' onSubmit={adicionarAtv}>
        <input value={name} onChange={(e) => setNome(e.target.value)} placeholder='Nome' required />
        <IMaskInput value={date} onChange={(e) => setDate(e.target.value)} mask="00/00/0000" placeholder='Data de entrega' required />
        <button type='submit'>Adicionar Atividade</button>
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
      data: date
    }
    setAtividades([...atividades, newArray])
    setNome('')
    setDate('')
  }

  function deletar(nome) {
    let aux = atividades
    setAtividades(aux.filter(atividade => atividade.nome != nome))
  }

  function btnDelete(nome) {
    console.log(nome);
    return (
      <button onClick={() => deletar(nome)}><i className="pi pi-trash"></i></button>
    )
  }

}

export default App
