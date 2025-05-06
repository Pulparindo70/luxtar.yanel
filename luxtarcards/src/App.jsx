import './index.css';
import logo from './assets/logo.png';
import avatar from './assets/avatar.jpg';

import background from './assets/2.jpg';

import instagramIcon from './assets/icons/instagram.png';
import facebookIcon from './assets/icons/facebook.png';
import whatsappIcon from './assets/icons/whatsapp.png';

import correoIcon from './assets/icons/correo.png';
import telefonoIcon from './assets/icons/telefono.png';
import ubicacionIcon from './assets/icons/ubicacion.png';

function App() {
  return (
    <div
      className="min-h-screen text-white flex flex-col items-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Capa de gradiente encima del fondo */}

      {/* Contenido principal */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* Banner con gradiente difuminado hacia el fondo */}
        <header className="relative w-full">
          <div className="bg-gradient-to-b from-black/60 via-black/40 to-black/0 w-full h-48 flex justify-center items-start pt-6 relative z-0">
            <img src={logo} alt="Luxtar Logo" className="h-12 opacity-80 z-10" />
          </div>

          {/* Foto de perfil sobrepuesta en la parte baja del banner (sin tapar el logo) */}
          <div className="absolute left-1/2 -bottom-12 transform -translate-x-1/2 z-20">
            <img
              src={avatar}
              alt="Perfil"
              className="w-36 h-36 object-cover rounded-full shadow-xl bg-black"
            />
          </div>
        </header>

        <div className="h-20"></div>

        {/* Nombre y cargo */}
        <section className="flex flex-col items-center text-center  space-y-1">
          <h1 className="text-3xl font-syne font-bold">Yanel Noh</h1>
          <p className="text-md font-syne text-red-400">Marketing</p>
        </section>

        {/* Contacto */}
        <section className="bg-black rounded-2xl shadow-lg mt-6 p-5 w-full max-w-xs space-y-4">
          <div className="flex items-center justify-center gap-4">
            <img src={telefonoIcon} className="w-5 h-5" />
            <p className="text-base font-monse">+52 998 222 6434</p>
          </div>
        </section>

        {/* Redes personales */}
        <section className="bg-black rounded-2xl shadow-lg mt-4 p-5 w-full max-w-xs">
          <div className="flex justify-around">
            <a href="https://wa.me/529982226434" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/yanel_noh?igsh=Z201MTA1cnQxMHFy&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/yanel.noh.2025" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* Empresa */}
        <h3 className="mt-10 text-2xl font-syne font-semibold">Luxtar Media</h3>

        <section className="bg-black rounded-2xl shadow-lg mt-3 p-5 w-full max-w-xs space-y-4">
          <div className="flex items-center justify-center gap-4">
            <img src={telefonoIcon} className="w-5 h-5" />
            <p className="text-base font-monse">+52 998 161 2486</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <img src={correoIcon} className="w-5 h-5" />
            <p className="text-base font-syne">contactoluxtar@gmail.com</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <img src={ubicacionIcon} className="w-5 h-5" />
            <a
              href="https://maps.app.goo.gl/FezFCmAUEEvaP7uS9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-syne hover:text-gray-300"
            >
              Cancún, Quintana Roo, MX
            </a>
          </div>
        </section>

        {/* Redes empresa */}
        <section className="bg-black rounded-2xl shadow-lg mt-4 p-5 w-full max-w-xs">
          <div className="flex justify-around">
            <a href="https://wa.me/529981612486" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/luxtarmedia?igsh=cGZzbDk4Y2RtZ3d5" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573887343177&mibextid=wwXIfr&rdid=gZ8KusRFV7ktqcau&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15xnSvcJop%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} className="w-6 h-6" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
