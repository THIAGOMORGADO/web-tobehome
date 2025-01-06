import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Hotel Paraíso</h3>
            <p className="text-gray-400">Luxo e conforto em um só lugar</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Links Rápidos</h3>
            <ul className="text-gray-400">
              <li><Link href="#" className="hover:text-white">Sobre Nós</Link></li>
              <li><Link href="#" className="hover:text-white">Quartos</Link></li>
              <li><Link href="#" className="hover:text-white">Serviços</Link></li>
              <li><Link href="#" className="hover:text-white">Contato</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contato</h3>
            <p className="text-gray-400">Rua das Palmeiras, 123</p>
            <p className="text-gray-400">Cidade Paraíso - SP</p>
            <p className="text-gray-400">Tel: (11) 1234-5678</p>
            <p className="text-gray-400">Email: contato@hotelparaiso.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Siga-nos</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center text-gray-400">
          © 2023 Hotel Paraíso. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

