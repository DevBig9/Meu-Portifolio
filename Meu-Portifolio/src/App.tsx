import React from 'react';
import { Github, Linkedin, Mail, Code2, Database, Terminal } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Isaac M. Silva</h1>
          <p className="text-xl md:text-2xl mb-8">Desenvolvedor Full-Stack</p>
          <p className="text-lg opacity-90 max-w-2xl">
            Desenvolvedor de 18 anos apaixonado por tecnologia, com foco especial em desenvolvimento back-end.
            Buscando oportunidades para aplicar e expandir meus conhecimentos em projetos desafiadores.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Sobre Mim</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600">
            <p>
              Sou um desenvolvedor Full-Stack com maior afinidade em back-end, sempre buscando aprender
              novas tecnologias e aprimorar minhas habilidades. Embora ainda não tenha experiência
              profissional formal, desenvolvi diversos projetos pessoais que me permitiram aplicar
              e aprofundar meus conhecimentos.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Code2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2">
                <li>Python</li>
                <li>JavaScript</li>
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Terminal className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Linguagens</h3>
              <ul className="space-y-2">
                <li>C</li>
                <li>C++</li>
                <li>Python</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Para adicionar seus projetos, substitua os textos e links abaixo com as informações dos seus projetos */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Sistema de Gerenciamento de Tarefas</h3>
              <p className="text-gray-600 mb-4">
                Um aplicativo web para gerenciamento de tarefas desenvolvido com React no frontend
                e Python (Flask) no backend. Implementa autenticação de usuários e persistência
                de dados em banco SQL.
              </p>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Tecnologias utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Flask</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SQLite</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/DevBig9/task-manager" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <Github className="w-4 h-4 mr-1" />
                  Código
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800"
                >
                  Ver demo →
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">API de Blog</h3>
              <p className="text-gray-600 mb-4">
                Uma API RESTful para um sistema de blog, com funcionalidades de CRUD para posts,
                comentários e usuários. Implementa autenticação JWT e documentação com Swagger.
              </p>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Tecnologias utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">FastAPI</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">JWT</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/DevBig9/blog-api" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <Github className="w-4 h-4 mr-1" />
                  Código
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800"
                >
                  Ver documentação →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Contato</h2>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com/DevBig9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Github className="w-6 h-6 mr-2" />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/isaac-m-silva-3765ab35a" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Linkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
            <a 
              href="mailto:contato.isaacmangelli@gmail.com" 
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Mail className="w-6 h-6 mr-2" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Isaac M. Silva. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;