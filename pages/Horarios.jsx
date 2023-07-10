import { useForm } from "react-hook-form"

const Horarios = () => {

  const {register, handleSubmit}= useForm();

  const onSubmit= (data) => {
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
<div>
  <label>Nombre</label>
  <input type="text" {...register('nombre', {
    required:true,
    maxLength: 10,
    })} />
</div>

<div>
  <label>Telefono</label>
  <input type="number" {...register('telefono',{
    required: true,
    
  } )} />
</div>

<div>
  <label>Correo</label>
  <input type="email" {...register('correo')} />
</div>
<input type="submit" value="enviar" />


      </form>
      
    </div>
  )
}

export default Horarios
