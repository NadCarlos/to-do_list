import LMain from "../layouts/LMain"

export default function Contact() {
  return (
    <LMain>
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Formulario de Contacto</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-600">Nombre</label>
            <input type="text" id="nombre" className="w-full p-2 border rounded-md" placeholder="Tu nombre" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Correo Electrónico</label>
            <input type="email" id="email" className="w-full p-2 border rounded-md" placeholder="tucorreo@example.com" />
          </div>
          <div className="mb-4">
            <label htmlFor="mensaje" className="block text-gray-600">Mensaje</label>
            <textarea id="mensaje" rows="4" className="w-full p-2 border rounded-md" placeholder="Escribe tu mensaje aquí"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Enviar</button>
        </form>
      </div>
    </LMain>
  )
}