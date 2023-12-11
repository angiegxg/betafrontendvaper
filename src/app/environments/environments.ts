interface Environment {
    production: boolean
    apiUrl: string
  }
  
  const env: Environment = {
    production: false,
    apiUrl: "http://localhost:3001/",
  }
  
  export { env as environment }