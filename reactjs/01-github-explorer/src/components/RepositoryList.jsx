import { useState, useEffect } from 'react';
import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos

const repositoryName = 'unform2'

export function RepositoryList () {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>

          <a href=''>Acessar repositório</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href=''>Acessar repositório</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href=''>Acessar repositório</a>
        </li>
      </ul>
    </section>
  )
}
