## 🚀 Automação de API com Playwright

Este projeto implementa automação de testes de API utilizando o Playwright
, garantindo qualidade, confiabilidade e rastreabilidade nas integrações entre sistemas.

---

## 📌 Sumário

- Visão Geral
- Tecnologias Utilizadas
- Estrutura do Projeto
- Pré-requisitos
- Instalação
- Execução dos Testes
- Relatórios
- Boas Práticas
- Contribuição
- Licença

---

## 🔎 Visão Geral

### O objetivo deste repositório é:  
Validar endpoints de forma automatizada.  
Garantir a integridade e confiabilidade das APIs.  
Fornecer relatórios claros e rastreáveis.  
Possibilitar fácil integração em pipelines de CI/CD.  
---

## 🛠 Tecnologias Utilizadas

- Node.js
 (LTS)
- Playwright
- TypeScript
- Allure Report
 (relatórios de execução)
- dotenv
 (configuração de variáveis de ambiente)

---

## 📂 Estrutura do Projeto
📦 api-automation-playwright  
├── 📁 tests           # Casos de teste de API  
│   ├── health.test.ts  
│   ├── users.test.ts  
│   └── ...  
├── 📁 fixtures        # Massa de dados e payloads  
├── 📁 utils           # Funções de suporte (helpers, requests, etc.)  
├── 📁 reports         # Relatórios gerados  
├── playwright.config.ts  
├── package.json  
├── tsconfig.json  
└── .env.example       # Exemplo de variáveis de ambiente

---

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

Node.js LTS

npm
 ou yarn

---

## ⚙️ Instalação

Clone o repositório:

git clone https://github.com/seu-usuario/api-automation-playwright.git
cd api-automation-playwright


Instale as dependências:

npm install


Configure as variáveis de ambiente:

cp .env.example .env

---

## ▶️ Execução dos Testes

Executar todos os testes:

npx playwright test


Executar testes filtrados por tag ou nome:

npx playwright test -g "users"

---

## 📊 Relatórios

Gerar e abrir relatório HTML:

npx playwright show-report


Se estiver usando Allure:

npm run allure:generate
npm run allure:open

---

## 📌 Boas Práticas

Nomear testes de forma clara e objetiva.

Utilizar fixtures para dados reutilizáveis.

Separar responsabilidades (payloads, requests, asserts).

Sempre validar status code e body da resposta.

Manter as dependências atualizadas.

---

## 🤝 Contribuição

Crie uma branch: git checkout -b minha-feature

Faça commit das alterações: git commit -m 'feat: minha nova feature'

Submeta para revisão: git push origin minha-feature

---

## 📜 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE
 para mais detalhes.
