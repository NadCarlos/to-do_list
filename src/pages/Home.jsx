import LMain from "../layouts/LMain"
import ProtectedRoute from "../components/PrivateRoutes"


export default function Home() {
  return (
    <LMain>
      <h1 className="text-3xl font-bold text-gray-800">Bienvenido</h1>
      <h3 className="text-xl font-semibold text-gray-700">Iniciaste Sesión con éxito!</h3>
      <h4 className="text-lg text-gray-600">Ingresa a "Tasks" para comenzar o a "Contact" para soporte</h4>
    </LMain>
  )
}